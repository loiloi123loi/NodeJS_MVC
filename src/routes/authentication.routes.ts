import { Router } from 'express'
import PATH from '~/constants/path.constants'
import { registerLocalUser, registerPage } from '~/controllers/authentication.controllers'
import { registerValidator } from '~/middlewares/authentication.middlewares'
const authenticationRouter = Router()

authenticationRouter.route(PATH.REGISTER).get(registerPage).post(registerValidator, registerLocalUser)

export default authenticationRouter
