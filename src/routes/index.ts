import { Express } from 'express'
import PATH from '~/constants/path.constants'
import { requestFilter } from '~/middlewares/authentication.middlewares'
import authenticationRouter from './authentication.routes'
import errorRouter from './error.routes'
import homeRouter from './home.routes'

export default function createRouter(app: Express) {
  app.use(requestFilter)
  app.use(PATH.DEFAULT_PATH, authenticationRouter)
  app.use(PATH.DEFAULT_PATH, homeRouter)
  app.use(errorRouter)
}
