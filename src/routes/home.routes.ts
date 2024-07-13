import { Router } from 'express'
import PATH from '~/constants/path.constants'
import { landingPage } from '~/controllers/home.controllers'
const homeRouter = Router()

homeRouter.route(PATH.LANDING).get(landingPage)

export default homeRouter
