import { Router } from 'express'
import PATH from '~/constants/path.constants'
import { createJob, dashboardPage, getEditJobPage, landingPage, updateJob } from '~/controllers/home.controllers'
import { editJobParamsValidator, jobValidator } from '~/middlewares/home.middlewares'
const homeRouter = Router()

homeRouter.route(PATH.LANDING).get(landingPage)
homeRouter
  .route(PATH.EDIT_JOB)
  .get(editJobParamsValidator, getEditJobPage)
  .patch(editJobParamsValidator, jobValidator, updateJob)
homeRouter.route(PATH.DEFAULT_PATH).get(dashboardPage).post(jobValidator, createJob)

export default homeRouter
