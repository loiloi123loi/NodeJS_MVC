import { Request, Response } from 'express'
import { ToastType } from '~/constants/enums'
import { USER_MESSAGES } from '~/constants/messages'
import PATH from '~/constants/path.constants'
import VIEW from '~/constants/views.constants'
import { CreateJobReqBody } from '~/models/requests/User.requests'
import jobService from '~/services/impl/job.services.impl'

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
      child: VIEW.ADD_JOB_CHILD,
      user: req.session.user,
      toast: {
        type,
        messages
      }
    })
  }
  res.render(VIEW.HOME_LAYOUT, {
    child: VIEW.ADD_JOB_CHILD,
    user: req.session.user
  })
}

export const createJob = async (req: Request<any, any, CreateJobReqBody>, res: Response) => {
  if (req.validationErrors) {
    return res.render(VIEW.HOME_LAYOUT, {
      child: VIEW.ADD_JOB_CHILD,
      toast: {
        type: ToastType.ERROR,
        messages: req.validationErrors
      }
    })
  }
  if (req.session.user?.id) {
    const result = await jobService.createJob(req.session.user?.id, req.body)
    if (result) {
      req.flash(
        'messages',
        JSON.stringify({
          type: ToastType.SUCCESS,
          messages: [USER_MESSAGES.CREATE_JOB_SUCCESS]
        })
      )
      return res.redirect(PATH.ALL_JOBS)
    }
  }
  req.flash(
    'messages',
    JSON.stringify({
      type: ToastType.ERROR,
      messages: [USER_MESSAGES.SOMETHING_WAS_WRONG_TRY_AGAIN_LATER]
    })
  )
  return res.redirect(PATH.DEFAULT_PATH)
}
