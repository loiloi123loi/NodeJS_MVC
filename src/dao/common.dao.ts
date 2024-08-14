import pool from '~/utils/connectDB'

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

  async findAll(
    data: Partial<T>,
    likeFields: string[] = [],
    sort?: { column: string; order: 'ASC' | 'DESC' }
  ): Promise<T[] | undefined> {
    const entries = Object.entries(data)
    const whereClause = entries
      .map(([key]) => {
        if (likeFields.includes(key)) {
          return `LOWER(${key}) LIKE LOWER(?)`
        } else {
          return `${key} = ?`
        }
      })
      .join(' AND ')
    const values = entries.map(([key, value]) => {
      if (likeFields.includes(key)) {
        return `%${value}%`
      } else {
        return value
      }
    })
    const sql =
      `SELECT * FROM ${this.tableName} WHERE ${whereClause}` + (sort ? ` ORDER BY ${sort.column} ${sort.order}` : '')
    if (Boolean(process.env.SHOW_SQL) === true) {
      console.log(sql, values)
    }
    const [result] = (await pool.execute(sql, values)) as [T[], any]
    return result.length > 0 ? result : undefined
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
}
