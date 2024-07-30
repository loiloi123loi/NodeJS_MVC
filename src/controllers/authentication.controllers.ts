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
        messages: [USER_MESSAGES.REGISTER_SUCCESS]
      }
    })
  }
  req.flash(
    'messages',
    JSON.stringify({
      type: ToastType.ERROR,
      messages: [USER_MESSAGES.SOMETHING_WAS_WRONG_TRY_AGAIN_LATER]
    })
  )
  return res.redirect(PATH.LANDING)
}

export const loginPage = (req: Request, res: Response) => {
  res.render(VIEW.DEFAULT_LAYOUT, { child: VIEW.LOGIN_CHILD })
}

export const loginLocalUser = async (req: Request<any, any, LoginReqBody>, res: Response) => {
  if (req.validationErrors) {
    return res.render(VIEW.DEFAULT_LAYOUT, {
      child: VIEW.LOGIN_CHILD,
      toast: {
        type: ToastType.ERROR,
        messages: [req.validationErrors]
      }
    })
  }
  const result = await userService.loginLocalUser(req.body)
  if (result) {
    req.session.user = result
    req.flash(
      'messages',
      JSON.stringify({
        type: ToastType.SUCCESS,
        messages: [USER_MESSAGES.LOGIN_SUCCESS]
      })
    )
    return res.redirect(PATH.DEFAULT_PATH)
  } else if (result === null) {
    return res.render(VIEW.DEFAULT_LAYOUT, {
      child: VIEW.LOGIN_CHILD,
      toast: {
        type: ToastType.ERROR,
        messages: [USER_MESSAGES.EMAIL_OR_PASSWORD_INCORRECT]
      }
    })
  }
  req.flash(
    'messages',
    JSON.stringify({
      type: ToastType.ERROR,
      messages: [USER_MESSAGES.SOMETHING_WAS_WRONG_TRY_AGAIN_LATER]
    })
  )
  return res.redirect(PATH.LANDING)
}
