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
    const [result] = (await pool.execute(`SELECT * FROM ${this.tableName} WHERE ${whereClause}`, values)) as [T[], any]
    return result.length > 0 ? result[0] : undefined
  }
}
