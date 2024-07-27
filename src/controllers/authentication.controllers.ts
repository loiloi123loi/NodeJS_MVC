import { Request, Response } from 'express'
import { ToastType } from '~/constants/enums'
import { USER_MESSAGES } from '~/constants/messages'
import VIEW from '~/constants/views.constants'
import { RegisterReqBody } from '~/models/requests/User.requests'
import userService from '~/services/impl/user.services.impl'

export const registerPage = (req: Request, res: Response) => {
  res.render(VIEW.DEFAULT_LAYOUT, { child: VIEW.REGISTER_CHILD })
}

export const registerLocalUser = async (req: Request<any, any, RegisterReqBody>, res: Response) => {
  if (req.validationErrors) {
    return res.render(VIEW.DEFAULT_LAYOUT, {
      child: VIEW.REGISTER_CHILD,
      toast: {
        type: ToastType.ERROR,
        messages: req.validationErrors
      }
    })
  }
  const result = await userService.registerLocalUser(req.body)
  if (result) {
    return res.render(VIEW.DEFAULT_LAYOUT, {
      child: VIEW.LANDING_CHILD,
      toast: {
        type: ToastType.SUCCESS,
        message: USER_MESSAGES.REGISTER_SUCCESS
      }
    })
  }
  return res.render(VIEW.DEFAULT_LAYOUT, {
    child: VIEW.LANDING_CHILD,
    toast: {
      type: ToastType.ERROR,
      message: USER_MESSAGES.SOMETHING_WAS_WRONG_TRY_AGAIN_LATER
    }
  })
}

export const loginPage = (req: Request, res: Response) => {
  res.render(VIEW.DEFAULT_LAYOUT, { child: VIEW.LOGIN_CHILD })
}
