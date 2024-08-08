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
    await pool.execute(`INSERT INTO ${this.tableName} (${keys}) VALUES (${placeHolders})`, values)
  }

  async findOne(data: Partial<T>): Promise<T | undefined> {
    const entries = Object.entries(data)
    const whereClause = entries.map(([key]) => `${key} = ?`).join(' AND ')
    const values = entries.map(([_, value]) => value)
    const [result] = (await pool.execute(`SELECT * FROM ${this.tableName} WHERE ${whereClause} LIMIT 1`, values)) as [
      T[],
      any
    ]
    return result.length > 0 ? result[0] : undefined
  }

  async findAll(data: Partial<T>): Promise<T[] | undefined> {
    const entries = Object.entries(data)
    const whereClause = entries.map(([key]) => `${key} = ?`).join(' AND ')
    const values = entries.map(([_, value]) => value)
    const [result] = (await pool.execute(`SELECT * FROM ${this.tableName} WHERE ${whereClause}`, values)) as [T[], any]
    return result.length > 0 ? result : undefined
  }

  async updateOne(conditions: Partial<T>, data: Partial<T>): Promise<void> {
    const validData = Object.entries(data).filter(([_, value]) => value !== null && value !== undefined)
    const setClause = validData.map(([key]) => `${key} = ?`).join(',')
    const setValues = validData.map(([_, value]) => value)
    const conditionEntries = Object.entries(conditions)
    const whereClause = conditionEntries.map(([key]) => `${key} = ?`).join(' AND ')
    const conditionValues = conditionEntries.map(([_, value]) => value)
    const values = [...setValues, ...conditionValues]
    await pool.execute(`UPDATE ${this.tableName} SET ${setClause} WHERE ${whereClause} LIMIT 1`, values)
  }

  async update(data: Partial<T>, conditions: Partial<T>): Promise<void> {
    const validData = Object.entries(data).filter(([_, value]) => value !== null && value !== undefined)
    const setClause = validData.map(([key]) => `${key} = ?`).join(',')
    const setValues = validData.map(([_, value]) => value)
    const conditionEntries = Object.entries(conditions)
    const whereClause = conditionEntries.map(([key]) => `${key} = ?`).join(' AND ')
    const conditionValues = conditionEntries.map(([_, value]) => value)
    const values = [...setValues, ...conditionValues]
    await pool.execute(`UPDATE ${this.tableName} SET ${setClause} WHERE ${whereClause}`, values)
  }
}
