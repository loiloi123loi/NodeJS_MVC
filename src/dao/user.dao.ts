import { IUser } from '~/models/User.model'
import CommonDAO from './common.dao'
import USER_ROLE from './userRole.dao'

class UserDAO extends CommonDAO<IUser> {
  constructor() {
    super(process.env.USER_TABLE as string)
  }

  async findOne(data: Partial<IUser>): Promise<IUser | undefined> {
    const user = await super.findOne(data)
    if (!user) {
      return undefined
    }
    const userRole = await USER_ROLE.findAll({ user_id: user.id })
    return { ...user, role: userRole?.map((item) => item.roles) }
  }
}

const USER = new UserDAO()
export default USER
