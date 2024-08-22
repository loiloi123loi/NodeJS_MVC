import { Router } from 'express'
import PATH from '~/constants/path.constants'
import { errorPage } from '~/controllers/error.controllers'
const errorRouter = Router()

errorRouter.route(PATH.ALL).get(errorPage)

export default errorRouter
