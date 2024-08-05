import { Router } from 'express'
import PATH from '~/constants/path.constants'
<<<<<<< HEAD
import { dashboardPage, getEditJobPage, landingPage } from '~/controllers/home.controllers'
const homeRouter = Router()

homeRouter.route(PATH.LANDING).get(landingPage)
homeRouter.route(PATH.EDIT_JOB).get(getEditJobPage)
homeRouter.route(PATH.DEFAULT_PATH).get(dashboardPage)
=======
import { createJob, dashboardPage, landingPage } from '~/controllers/home.controllers'
const homeRouter = Router()

homeRouter.route(PATH.LANDING).get(landingPage)
homeRouter.route(PATH.DEFAULT_PATH).get(dashboardPage).post(createJob)
>>>>>>> 899736cc98e94a3dcf7d50470ee0b7b5ee950c35

export default homeRouter
