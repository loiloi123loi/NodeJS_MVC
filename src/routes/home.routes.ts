import { Router } from 'express'
import PATH from '~/constants/path.constants'
import { createJob, dashboardPage, getEditJobPage, landingPage } from '~/controllers/home.controllers'
const homeRouter = Router()

homeRouter.route(PATH.LANDING).get(landingPage)
homeRouter.route(PATH.EDIT_JOB).get(getEditJobPage)
homeRouter.route(PATH.DEFAULT_PATH).get(dashboardPage).post(createJob)

export default homeRouter
