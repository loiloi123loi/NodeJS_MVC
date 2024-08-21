import { IJob } from '../Job.model'

export interface AllJobsReponse {
  jobs: IJob[] | undefined
  totalJobs: number
  numOfPages: number
  page: number
}
