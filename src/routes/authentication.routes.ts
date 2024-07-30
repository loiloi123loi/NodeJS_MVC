import { Router } from 'express'
import PATH from '~/constants/path.constants'
import { loginLocalUser, loginPage, registerLocalUser, registerPage } from '~/controllers/authentication.controllers'
import { loginValidator, registerValidator } from '~/middlewares/authentication.middlewares'
const authenticationRouter = Router()

authenticationRouter.route(PATH.REGISTER).get(registerPage).post(registerValidator, registerLocalUser)
authenticationRouter.route(PATH.LOGIN).get(loginPage).post(loginValidator, loginLocalUser)

export default authenticationRouter
