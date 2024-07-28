import USER from '~/dao/user.dao'
import { LoginReqBody, RegisterReqBody } from '~/models/requests/User.requests'
import UserService from '../user.services'
import User, { IUser } from '~/models/User.model'
import { LoginProvider } from '~/constants/enums'
import crypto from 'crypto'
import { comparePassword, hashPassword } from '~/utils/bcrypt'

class UserServiceImpl implements UserService {
  async isEmailExist(email: string) {
    const user = await USER.findOne({ email })
    return Boolean(user)
  }
  async registerLocalUser(body: RegisterReqBody) {
    const { password } = body
    const newHashPassword = await hashPassword(password)
    try {
      await USER.create(
        new User({
          ...body,
          password: newHashPassword,
          provider: LoginProvider.LOCAL,
          verified: false,
          activeToken: crypto.randomBytes(70).toString('hex'),
          activeTokenExp: new Date(Date.now() + 3600 * 1000)
        })
      )
      return true
    } catch (err) {
      console.log(`UserService.registerLocalUser`, err)
    }
    return false
  }
  async loginLocalUser(body: LoginReqBody): Promise<IUser | undefined | null> {
    const { email, password } = body
    try {
      const user = await USER.findOne({
        email
      })
      if (user) {
        const isMatch = await comparePassword(password, user.password)
        return isMatch ? user : null
      }
    } catch (err) {
      console.log(`UserService.loginLocalUser`, err)
    }
  }
}

const userService = new UserServiceImpl()
export default userService
