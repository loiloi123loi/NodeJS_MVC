import { RegisterReqBody } from '~/models/requests/User.requests'

export default interface UserService {
  isEmailExist(email: string): Promise<boolean>
  registerLocalUser(body: RegisterReqBody): Promise<boolean>
}
