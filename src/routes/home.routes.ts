import { Router } from 'express'
import PATH from '~/constants/path.constants'
import { dashboardPage, getAllJobsPage, landingPage } from '~/controllers/home.controllers'
const homeRouter = Router()

homeRouter.route(PATH.LANDING).get(landingPage)
homeRouter.route(PATH.ALL_JOBS).get(getAllJobsPage)
homeRouter.route(PATH.DEFAULT_PATH).get(dashboardPage)

export default homeRouter
