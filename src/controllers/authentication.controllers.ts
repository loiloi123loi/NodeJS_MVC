import { Request, Response } from 'express'
import { ToastType } from '~/constants/enums'
import { USER_MESSAGES } from '~/constants/messages'
import PATH from '~/constants/path.constants'
import VIEW from '~/constants/views.constants'
import { LoginReqBody, RegisterReqBody } from '~/models/requests/User.requests'
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

export const loginLocalUser = async (req: Request<any, any, LoginReqBody>, res: Response) => {
  if (req.validationErrors) {
    console.log(req.validationErrors)
    return res.render(VIEW.DEFAULT_LAYOUT, {
      child: VIEW.LOGIN_CHILD,
      toast: {
        type: ToastType.ERROR,
        messages: req.validationErrors
      }
    })
  }
  const result = await userService.loginLocalUser(req.body)
  if (result) {
    return res.redirect(PATH.DEFAULT_PATH)
  }
  return res.render(VIEW.DEFAULT_LAYOUT, {
    child: VIEW.LANDING_CHILD,
    toast: {
      type: ToastType.ERROR,
      message: USER_MESSAGES.SOMETHING_WAS_WRONG_TRY_AGAIN_LATER
    }
  })
}
