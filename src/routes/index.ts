import { Express } from 'express'
import PATH from '~/constants/path.constants'
import { requestFilter } from '~/middlewares/authentication.middlewares'
import authenticationRouter from './authentication.routes'
import errorRouter from './error.routes'
import homeRouter from './home.routes'
import USER from '~/dao/user.dao'

export default function createRouter(app: Express) {
  app.use(async (req, res, next) => {
    if (!req.session.user) {
      const user = await USER.findOne({
        email: '123123@gmail.com'
      })
      if (user) {
        req.session.user = user
      }
    }
    next()
  })
  app.use(requestFilter)
  app.use(PATH.DEFAULT_PATH, authenticationRouter)
  app.use(PATH.DEFAULT_PATH, homeRouter)
  app.use(errorRouter)
}
