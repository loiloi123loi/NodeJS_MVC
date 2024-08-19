import { Router } from 'express'
import PATH from '~/constants/path.constants'
import { createJob, dashboardPage, getAdminPage, landingPage } from '~/controllers/home.controllers'
import { createJobValidator } from '~/middlewares/home.middlewares'
const homeRouter = Router()

homeRouter.route(PATH.LANDING).get(landingPage)
homeRouter.route(PATH.ADMIN).get(getAdminPage)
homeRouter.route(PATH.DEFAULT_PATH).get(dashboardPage).post(createJobValidator, createJob)

export default homeRouter
