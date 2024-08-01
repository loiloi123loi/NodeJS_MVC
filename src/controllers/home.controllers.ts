import { Request, Response } from 'express'
import VIEW from '~/constants/views.constants'

export const landingPage = (req: Request, res: Response) => {
  const [str] = req.flash('messages')
  if (str) {
    const { messages, type } = JSON.parse(str)
    return res.render(VIEW.DEFAULT_LAYOUT, {
      child: VIEW.LANDING_CHILD,
      toast: {
        type,
        messages
      }
    })
  }
  res.render(VIEW.DEFAULT_LAYOUT, {
    child: VIEW.LANDING_CHILD
  })
}

export const dashboardPage = (req: Request, res: Response) => {
  const [str] = req.flash('messages')
  if (str) {
    const { messages, type } = JSON.parse(str)
    return res.render(VIEW.HOME_LAYOUT, {
      child: '../dashboard/add-job.ejs',
      toast: {
        type,
        messages
      }
    })
  }
  res.render(VIEW.HOME_LAYOUT, {
    child: '../dashboard/add-job.ejs'
  })
}
