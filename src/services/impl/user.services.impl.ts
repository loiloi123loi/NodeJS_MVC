import crypto from 'crypto'
import { LoginProvider, UserRole } from '~/constants/enums'
import USER from '~/dao/user.dao'
import USER_ROLE from '~/dao/userRole.dao'
import { LoginReqBody, RegisterReqBody, UpdateProfileReqBody } from '~/models/requests/User.requests'
import User, { IUser } from '~/models/User.model'
import { comparePassword, hashPassword } from '~/utils/bcrypt'
import UserService from '../user.services'

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
      const user = await USER.findOne({
        email: body.email
      })
      if (user) {
        await USER_ROLE.create({
          user_id: user.id,
          roles: UserRole.USER
        })
      }
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
  async updateProfile(user_id: number, body: UpdateProfileReqBody): Promise<IUser | undefined> {
    const { avatar } = body
    const avatar_url = avatar?.filename
    delete body.email
    delete body.avatar
    try {
      await USER.updateOne(
        {
          id: user_id
        },
        {
          ...body,
          avatar: avatar_url
        }
      )
      const user = await USER.findOne({
        id: user_id
      })
      return user
    } catch (err) {
      console.log(`UserService.updateProfile`, err)
    }
  }
}

const userService = new UserServiceImpl()
export default userService
