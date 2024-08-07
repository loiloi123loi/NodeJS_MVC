import { JobStatusEnum, JobTypeEnum } from '~/constants/enums'

export interface IJob {
  id?: number
  position: string
  company: string
  jobLocation: string
  status: JobStatusEnum
  jobType: JobTypeEnum
  created_by: number
  created_at?: Date
  updated_at?: Date
}

export default class JobModel {
  id?: number
  position: string
  company: string
  jobLocation: string
  status: JobStatusEnum
  jobType: JobTypeEnum
  created_by: number
  created_at: Date
  updated_at: Date

  constructor({ id, position, company, jobLocation, status, jobType, created_by, created_at, updated_at }: IJob) {
    const now = new Date()
    this.id = id
    this.position = position
    this.company = company
    this.jobLocation = jobLocation
    this.status = status
    this.jobType = jobType
    this.created_by = created_by
    this.created_at = created_at || now
    this.updated_at = updated_at || now
  }
}
