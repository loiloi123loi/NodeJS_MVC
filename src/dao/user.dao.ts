import User, { IUser } from '~/models/User.model'
import CommonDAO from './common.dao'

class UserDAO extends CommonDAO<IUser> {
  constructor() {
    super(process.env.USER_TABLE as string)
  }
}

const USER = new UserDAO()
export default USER
