import { Router } from 'express'
import PATH from '~/constants/path.constants'
import {
  loginLocalUser,
  loginPage,
  logoutUser,
  registerLocalUser,
  registerPage
} from '~/controllers/authentication.controllers'
import { loginValidator, logoutValidator, registerValidator } from '~/middlewares/authentication.middlewares'
const authenticationRouter = Router()

authenticationRouter.route(PATH.REGISTER).get(registerPage).post(registerValidator, registerLocalUser)
authenticationRouter.route(PATH.LOGIN).get(loginPage).post(loginValidator, loginLocalUser)
authenticationRouter.route(PATH.LOGOUT).delete(logoutValidator, logoutUser)

export default authenticationRouter
