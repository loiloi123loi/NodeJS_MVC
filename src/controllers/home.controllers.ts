import { Request, Response } from 'express'
import { ToastType, UserRole } from '~/constants/enums'
import { USER_MESSAGES } from '~/constants/messages'
import PATH from '~/constants/path.constants'
import VIEW from '~/constants/views.constants'
import {
  CreateJobReqBody,
  DeleteJobReqParams,
  EditJobReqBody,
  EditJobReqParams,
  GetAllJobsReqQuery,
  UpdateProfileReqBody
} from '~/models/requests/User.requests'
import jobService from '~/services/impl/job.services.impl'
import userService from '~/services/impl/user.services.impl'

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
      user: req.session.user,
      toast: {
        type: ToastType.ERROR,
        messages: [req.validationErrors]
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

export const getAdminPage = async (req: Request, res: Response) => {
  if (req.session.user && req.session.user.role?.includes(UserRole.ADMIN)) {
    const [str] = req.flash('messages')
    const { totalUsers, totalJobs } = await jobService.getDashboardInfo(Number(req.session.user))
    if (str) {
      const { messages, type } = JSON.parse(str)
      return res.render(VIEW.HOME_LAYOUT, {
        child: VIEW.ADMIN_CHILD,
        user: req.session.user,
        info: { totalUsers, totalJobs },
        toast: {
          type,
          messages
        }
      })
    }
    return res.render(VIEW.HOME_LAYOUT, {
      child: VIEW.ADMIN_CHILD,
      user: req.session.user,
      info: { totalUsers, totalJobs }
    })
  }
  res.render(VIEW.HOME_LAYOUT, {
    child: VIEW.ADMIN_CHILD,
    user: req.session.user,
    info: { totalUsers: 0, totalJobs: 0 },
    toast: {
      type: ToastType.ERROR,
      messages: [USER_MESSAGES.NOT_HAVE_PERMISSION]
    }
  })
}

export const getEditJobPage = async (req: Request<EditJobReqParams>, res: Response) => {
  if (req.validationErrors) {
    req.flash(
      'messages',
      JSON.stringify({
        type: ToastType.ERROR,
        messages: [req.validationErrors]
      })
    )
    return res.redirect(PATH.DEFAULT_PATH)
  }
  const job = await jobService.getJob(Number(req.params.id))
  const [str] = req.flash('messages')
  if (str) {
    const { messages, type } = JSON.parse(str)
    return res.render(VIEW.HOME_LAYOUT, {
      child: VIEW.EDIT_JOB_CHILD,
      user: req.session.user,
      job,
      toast: {
        type,
        messages
      }
    })
  }
  res.render(VIEW.HOME_LAYOUT, {
    child: VIEW.EDIT_JOB_CHILD,
    user: req.session.user,
    job
  })
}

export const updateJob = async (req: Request<EditJobReqParams, any, EditJobReqBody>, res: Response) => {
  if (req.validationErrors) {
    req.flash(
      'messages',
      JSON.stringify({
        type: ToastType.ERROR,
        messages: [req.validationErrors]
      })
    )
    return res.redirect(PATH.DEFAULT_PATH)
  }
  const result = await jobService.updateJob(Number(req.params.id), req.body)
  if (result) {
    req.flash(
      'messages',
      JSON.stringify({
        type: ToastType.SUCCESS,
        messages: [USER_MESSAGES.UPDATE_JOB_SUCCESS]
      })
    )
    return res.redirect(PATH.ALL_JOBS)
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

export const getStatsPage = async (req: Request, res: Response) => {
  if (req.session.user?.id) {
    const result = await jobService.getAllStatsInfo(req.session.user.id)
    if (result) {
      return res.render(VIEW.HOME_LAYOUT, {
        child: VIEW.STATS_CHILD,
        user: req.session.user,
        stats: result,
        toast: {
          type: ToastType.ERROR,
          messages: req.validationErrors
        }
      })
    }
  }
  return res.render(VIEW.HOME_LAYOUT, {
    child: VIEW.STATS_CHILD,
    user: req.session.user,
    stats: {
      defaultStats: { pending: 0, interview: 0, declined: 0 },
      monthlyApplications: Array.from({ length: 12 }, (_) => 0)
    }
  })
}

export const getAllJobsPage = async (req: Request<any, any, any, GetAllJobsReqQuery>, res: Response) => {
  if (req.validationErrors) {
    return res.render(VIEW.HOME_LAYOUT, {
      child: VIEW.ALL_JOBS_CHILD,
      user: req.session.user,
      job: req.query,
      data: [],
      toast: {
        type: ToastType.ERROR,
        messages: req.validationErrors
      }
    })
  }
  if (req.session.user) {
    const result = await jobService.getAllJobs(Number(req.session.user.id), req.query)
    if (result) {
      const [str] = req.flash('messages')
      if (str) {
        const { messages, type } = JSON.parse(str)
        return res.render(VIEW.HOME_LAYOUT, {
          child: VIEW.ALL_JOBS_CHILD,
          user: req.session.user,
          job: req.query,
          data: result,
          toast: {
            type,
            messages
          }
        })
      }
      return res.render(VIEW.HOME_LAYOUT, {
        child: VIEW.ALL_JOBS_CHILD,
        user: req.session.user,
        job: req.query,
        data: result,
        toast: {
          type: ToastType.ERROR,
          messages: req.validationErrors
        }
      })
    }
  }
}

export const deleteJob = async (req: Request<DeleteJobReqParams>, res: Response) => {
  if (req.validationErrors) {
    req.flash(
      'messages',
      JSON.stringify({
        type: ToastType.ERROR,
        messages: req.validationErrors
      })
    )
    return res.json()
  }
  if (req.session.user) {
    const result = await jobService.deleteJob(Number(req.session.user.id), Number(req.params.job_id))
    if (result) {
      req.flash(
        'messages',
        JSON.stringify({
          type: ToastType.SUCCESS,
          messages: [USER_MESSAGES.DELETE_JOB_SUCCESS]
        })
      )
      return res.json()
    }
  }
  req.flash(
    'messages',
    JSON.stringify({
      type: ToastType.ERROR,
      messages: [USER_MESSAGES.SOMETHING_WAS_WRONG_TRY_AGAIN_LATER]
    })
  )
  res.json()
}

export const getProfilePage = (req: Request, res: Response) => {
  const [str] = req.flash('messages')
  if (str) {
    const { messages, type } = JSON.parse(str)
    return res.render(VIEW.HOME_LAYOUT, {
      child: VIEW.PROFILE_CHILD,
      user: req.session.user,
      toast: {
        type,
        messages
      }
    })
  }
  res.render(VIEW.HOME_LAYOUT, {
    child: VIEW.PROFILE_CHILD,
    user: req.session.user
  })
}

export const updateProfile = async (req: Request<any, any, UpdateProfileReqBody>, res: Response) => {
  if (req.validationErrors) {
    req.flash(
      'messages',
      JSON.stringify({
        type: ToastType.ERROR,
        messages: [req.validationErrors]
      })
    )
    return res.redirect(PATH.PROFILE)
  }
  if (req.session.user?.id) {
    const user = await userService.updateProfile(req.session.user.id, { ...req.body, avatar: req.file })
    if (user) {
      req.session.user = user
      req.flash(
        'messages',
        JSON.stringify({
          type: ToastType.SUCCESS,
          messages: [USER_MESSAGES.PROFILE_UPDATE_SUCCESS]
        })
      )
      return res.redirect(PATH.PROFILE)
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
