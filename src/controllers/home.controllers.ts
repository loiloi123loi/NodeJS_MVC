import { Request, Response } from 'express'
import VIEW from '~/constants/views.constants'

export const landingPage = (req: Request, res: Response) => {
  res.render(VIEW.DEFAULT_LAYOUT, { child: VIEW.LANDING_CHILD })
}
