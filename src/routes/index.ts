import { Express } from 'express'
import PATH from '~/constants/path.constants'
import homeRouter from './home.routes'
import errorRouter from './error.routes'
import authenticationRouter from './authentication.routes'
import { requestFilter } from '~/middlewares/authentication.middlewares'

export default function createRouter(app: Express) {
  app.use(requestFilter)
  app.use(PATH.DEFAULT_PATH, authenticationRouter)
  app.use(PATH.DEFAULT_PATH, homeRouter)
  app.use(errorRouter)
}
