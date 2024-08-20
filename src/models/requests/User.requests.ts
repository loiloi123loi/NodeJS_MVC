import { ParamsDictionary } from 'express-serve-static-core'
import { ParsedQs } from 'qs'
import { JobStatusEnum, JobTypeEnum } from '~/constants/enums'

export interface RegisterReqBody {
  fullName: string
  location: string
  email: string
  password: string
  repeat_password: string
}

export interface LoginReqBody {
  email: string
  password: string
}

export interface CreateJobReqBody {
  position: string
  company: string
  jobLocation: string
  status: JobStatusEnum
  jobType: JobTypeEnum
}

export interface GetAllJobsReqQuery extends ParsedQs {
  search: string
  searchStatus: string
  searchType: string
  sort: string
  limit: string
  page: string
}

export interface DeleteJobReqParams extends ParamsDictionary {
  job_id: string
}
export interface UpdateProfileReqBody {
  avatar?: Express.Multer.File
  fullName: string
  location: string
  email?: string
}
