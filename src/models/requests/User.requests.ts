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

export interface UpdateProfileReqBody {
  avatar?: Express.Multer.File
  fullName: string
  location: string
  email?: string
}
