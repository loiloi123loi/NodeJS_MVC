import { Router } from 'express'
import PATH from '~/constants/path.constants'
import { createJob, dashboardPage, getProfilePage, landingPage, updateProfile } from '~/controllers/home.controllers'
import { createJobValidator, updateProfileValidator } from '~/middlewares/home.middlewares'
import upload from '~/utils/multer'
const homeRouter = Router()

homeRouter.route(PATH.LANDING).get(landingPage)
homeRouter.route(PATH.PROFILE).get(getProfilePage).patch(upload.single('avatar'), updateProfileValidator, updateProfile)
homeRouter.route(PATH.DEFAULT_PATH).get(dashboardPage).post(createJobValidator, createJob)

export default homeRouter
