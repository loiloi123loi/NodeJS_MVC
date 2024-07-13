import { Request, Response } from 'express'
import VIEW from '~/constants/views.constants'

export const errorPage = (req: Request, res: Response) => {
  res.render(VIEW.DEFAULT_LAYOUT, { child: VIEW.ERROR_CHILD })
}
