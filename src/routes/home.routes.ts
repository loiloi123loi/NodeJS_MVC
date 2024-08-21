import { Router } from 'express'
import PATH from '~/constants/path.constants'
import {
  createJob,
  dashboardPage,
  deleteJob,
  getAllJobsPage,
  getProfilePage,
  getStatsPage,
  landingPage,
  updateProfile
} from '~/controllers/home.controllers'
import {
  createJobValidator,
  deleteJobValidator,
  getAllJobsValidator,
  updateProfileValidator
} from '~/middlewares/home.middlewares'
import upload from '~/utils/multer'
const homeRouter = Router()

homeRouter.route(PATH.LANDING).get(landingPage)
homeRouter.route(PATH.STATS).get(getStatsPage)
homeRouter.route(PATH.ALL_JOBS).get(getAllJobsValidator, getAllJobsPage)
homeRouter.route(PATH.DELETE_JOB).delete(deleteJobValidator, deleteJob)
homeRouter.route(PATH.PROFILE).get(getProfilePage).patch(upload.single('avatar'), updateProfileValidator, updateProfile)
homeRouter.route(PATH.DEFAULT_PATH).get(dashboardPage).post(createJobValidator, createJob)

export default homeRouter
