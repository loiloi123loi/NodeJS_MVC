import { Router } from 'express'
import PATH from '~/constants/path.constants'
import {
  createJob,
  dashboardPage,
  deleteJob,
  getAdminPage,
  getAllJobsPage,
  getEditJobPage,
  getProfilePage,
  getStatsPage,
  landingPage,
  updateJob,
  updateProfile
} from '~/controllers/home.controllers'
import {
  deleteJobValidator,
  editJobParamsValidator,
  getAllJobsValidator,
  jobValidator,
  updateProfileValidator
} from '~/middlewares/home.middlewares'
import upload from '~/utils/multer'
const homeRouter = Router()

homeRouter.route(PATH.LANDING).get(landingPage)
homeRouter
  .route(PATH.EDIT_JOB)
  .get(editJobParamsValidator, getEditJobPage)
  .patch(editJobParamsValidator, jobValidator, updateJob)
homeRouter.route(PATH.STATS).get(getStatsPage)
homeRouter.route(PATH.ALL_JOBS).get(getAllJobsValidator, getAllJobsPage)
homeRouter.route(PATH.DELETE_JOB).delete(deleteJobValidator, deleteJob)
homeRouter.route(PATH.PROFILE).get(getProfilePage).patch(upload.single('avatar'), updateProfileValidator, updateProfile)
homeRouter.route(PATH.ADMIN).get(getAdminPage)
homeRouter.route(PATH.DEFAULT_PATH).get(dashboardPage).post(jobValidator, createJob)

export default homeRouter
