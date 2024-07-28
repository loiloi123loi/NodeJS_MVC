import { Router } from 'express'
import PATH from '~/constants/path.constants'
import { dashboardPage, landingPage } from '~/controllers/home.controllers'
const homeRouter = Router()

homeRouter.route(PATH.LANDING).get(landingPage)
homeRouter.route(PATH.DEFAULT_PATH).get(dashboardPage)

export default homeRouter
