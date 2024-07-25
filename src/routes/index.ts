import { Express } from 'express'
import PATH from '~/constants/path.constants'
import homeRouter from './home.routes'
import errorRouter from './error.routes'
import authenticationRouter from './authentication.routes'

export default function createRouter(app: Express) {
  app.use(PATH.DEFAULT_PATH, homeRouter)
  app.use(PATH.DEFAULT_PATH, authenticationRouter)
  app.use(errorRouter)
}
