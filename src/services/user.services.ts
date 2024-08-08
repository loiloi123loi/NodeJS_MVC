import { LoginReqBody, RegisterReqBody } from '~/models/requests/User.requests'
import { IUser } from '~/models/User.model'

export default interface UserService {
  isEmailExist(email: string): Promise<boolean>
  registerLocalUser(body: RegisterReqBody): Promise<boolean>
  loginLocalUser(body: LoginReqBody): Promise<IUser | undefined | null>
}
