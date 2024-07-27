import { Router } from 'express'
import PATH from '~/constants/path.constants'
import { loginPage, registerLocalUser, registerPage } from '~/controllers/authentication.controllers'
import { registerValidator } from '~/middlewares/authentication.middlewares'
const authenticationRouter = Router()

authenticationRouter.route(PATH.REGISTER).get(registerPage).post(registerValidator, registerLocalUser)
authenticationRouter.route(PATH.LOGIN).get(loginPage)

export default authenticationRouter
