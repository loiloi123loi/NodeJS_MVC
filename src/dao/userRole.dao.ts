import UserRoleModel from '~/models/UserRole.model'
import CommonDAO from './common.dao'

class UserRoleDAO extends CommonDAO<UserRoleModel> {
  constructor() {
    super(process.env.USER_ROLES_TABLE as string)
  }
}

const USER_ROLE = new UserRoleDAO()
export default USER_ROLE
