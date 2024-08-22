import 'express'
declare module 'express' {
  interface Request {
    validationErrors?: string[]
  }
}

import 'express-session'
import { IUser } from './models/User.model'
declare module 'express-session' {
  interface SessionData {
    user?: IUser
  }
}
