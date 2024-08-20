import { RegisterReqBody, UpdateProfileReqBody } from '~/models/requests/User.requests'
import { IUser } from '~/models/User.model'

export default interface UserService {
  isEmailExist(email: string): Promise<boolean>
  registerLocalUser(body: RegisterReqBody): Promise<boolean>
  updateProfile(user_id: number, body: UpdateProfileReqBody): Promise<IUser | undefined>
}
