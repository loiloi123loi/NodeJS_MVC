import { UserRole } from '~/constants/enums'

export interface IUserRole {
  user_id: number
  roles: UserRole
}

export default class UserRoleModel {
  user_id: number
  roles: UserRole

  constructor({ user_id, roles }: IUserRole) {
    this.user_id = user_id
    this.roles = roles
  }
}
