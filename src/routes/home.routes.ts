import { Router } from 'express'
import PATH from '~/constants/path.constants'
import { createJob, dashboardPage, deleteJob, getAllJobsPage, landingPage } from '~/controllers/home.controllers'
import { createJobValidator, deleteJobValidator, getAllJobsValidator } from '~/middlewares/home.middlewares'
const homeRouter = Router()

homeRouter.route(PATH.LANDING).get(landingPage)
homeRouter.route(PATH.ALL_JOBS).get(getAllJobsValidator, getAllJobsPage)
homeRouter.route(PATH.DELETE_JOB).delete(deleteJobValidator, deleteJob)
homeRouter.route(PATH.DEFAULT_PATH).get(dashboardPage).post(createJobValidator, createJob)

export default homeRouter
