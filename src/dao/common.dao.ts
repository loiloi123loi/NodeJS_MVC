import pool from '~/utils/connectDB'

interface FindAllOption {
  groupBy?: { columns: string[] }
  sortBy?: { columns: string[]; order: 'ASC' | 'DESC' }
  select?: { [columns: string]: string }
  likes?: { [columns: string]: string }
}

export default class CommonDAO<T> {
  private readonly tableName: string

  constructor(tableName: string) {
    this.tableName = tableName
  }

  async create(data: Partial<T>): Promise<void> {
    const validData = Object.entries(data).filter(([_, value]) => value !== null && value !== undefined)
    const keys = validData.map(([key]) => key).join(',')
    const values = validData.map(([_, value]) => value)
    const placeHolders = values.map(() => '?').join(',')
    const sql = `INSERT INTO ${this.tableName} (${keys}) VALUES (${placeHolders})`
    if (Boolean(process.env.SHOW_SQL) === true) {
      console.log(sql, values)
    }
    await pool.execute(sql, values)
  }

  async findOne(data: Partial<T>): Promise<T | undefined> {
    const entries = Object.entries(data)
    const whereClause = entries.map(([key]) => `${key} = ?`).join(' AND ')
    const values = entries.map(([_, value]) => value)
    const sql = `SELECT * FROM ${this.tableName} WHERE ${whereClause} LIMIT 1`
    if (Boolean(process.env.SHOW_SQL) === true) {
      console.log(sql, values)
    }
    const [result] = (await pool.execute(sql, values)) as [T[], any]
    return result.length > 0 ? result[0] : undefined
  }

  async findAll(data: Partial<T>, conditions?: FindAllOption) {
    const { select, likes, groupBy, sortBy } = conditions || {}
    let selectClause = '*'
    if (select) {
      selectClause = Object.entries(select)
        .map(([key, value]) => {
          if (key === value) return key
          return `${key} AS ${value}`
        })
        .join(', ')
    }
    const entries = Object.entries(data)
    let equalClause = ''
    if (entries.length > 0) {
      equalClause = `AND ${entries.map(([key]) => `${key} = ?`).join(' AND ')}`
    }
    const values = entries.map(([_, value]) => value)
    let likeClause = ''
    if (likes) {
      const likesEntries = Object.entries(likes)
      likeClause = `AND ${likesEntries.map(([key]) => `LOWER(${key}) LIKE LOWER(?)`).join(' AND ')}`
      likesEntries.map(([_, value]) => values.push(`%${value}%`))
    }
    let groupClause = ''
    if (groupBy) {
      groupClause = `GROUP BY ${groupBy.columns?.join(', ')}`
    }
    let sortClause = ''
    if (sortBy) {
      sortClause = `ORDER BY ${sortBy.columns?.join(', ')} ${sortBy.order}`
    }
    const sql = `SELECT ${selectClause} FROM ${this.tableName} WHERE 1 = 1 ${equalClause} ${likeClause} ${groupClause} ${sortClause}`
    if (Boolean(process.env.SHOW_SQL) === true) {
      console.log(sql, values)
    }
    const [result] = (await pool.execute(sql, values)) as [T[], any]
    return result.length > 0 ? result : []
  }

  async deleteOne(data: Partial<T>): Promise<void> {
    const entries = Object.entries(data)
    const whereClause = entries.map(([key]) => `${key} = ?`).join(' AND ')
    const values = entries.map(([_, value]) => value)
    const sql = `DELETE FROM ${this.tableName} WHERE ${whereClause} LIMIT 1`
    if (Boolean(process.env.SHOW_SQL) === true) {
      console.log(sql, values)
    }
    await pool.execute(sql, values)
  }

  async delete(data: Partial<T>): Promise<void> {
    const entries = Object.entries(data)
    const whereClause = entries.map(([key]) => `${key} = ?`).join(' AND ')
    const values = entries.map(([_, value]) => value)
    const sql = `DELETE FROM ${this.tableName} WHERE ${whereClause}`
    if (Boolean(process.env.SHOW_SQL) === true) {
      console.log(sql, values)
    }
    await pool.execute(sql, values)
  }

  async updateOne(conditions: Partial<T>, data: Partial<T>): Promise<void> {
    const validData = Object.entries(data).filter(([_, value]) => value !== null && value !== undefined)
    const setClause = validData.map(([key]) => `${key} = ?`).join(',')
    const setValues = validData.map(([_, value]) => value)
    const conditionEntries = Object.entries(conditions)
    const whereClause = conditionEntries.map(([key]) => `${key} = ?`).join(' AND ')
    const conditionValues = conditionEntries.map(([_, value]) => value)
    const values = [...setValues, ...conditionValues]
    const sql = `UPDATE ${this.tableName} SET ${setClause} WHERE ${whereClause} LIMIT 1`
    if (Boolean(process.env.SHOW_SQL) === true) {
      console.log(sql, values)
    }
    await pool.execute(sql, values)
  }

  async update(data: Partial<T>, conditions: Partial<T>): Promise<void> {
    const validData = Object.entries(data).filter(([_, value]) => value !== null && value !== undefined)
    const setClause = validData.map(([key]) => `${key} = ?`).join(',')
    const setValues = validData.map(([_, value]) => value)
    const conditionEntries = Object.entries(conditions)
    const whereClause = conditionEntries.map(([key]) => `${key} = ?`).join(' AND ')
    const conditionValues = conditionEntries.map(([_, value]) => value)
    const values = [...setValues, ...conditionValues]
    const sql = `UPDATE ${this.tableName} SET ${setClause} WHERE ${whereClause}`
    if (Boolean(process.env.SHOW_SQL) === true) {
      console.log(sql, values)
    }
    await pool.execute(sql, values)
  }
}
