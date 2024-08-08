import { IJob } from '~/models/Job.model'
import { CreateJobReqBody } from '~/models/requests/User.requests'

export interface JobService {
  createJob(user_id: number, body: CreateJobReqBody): Promise<boolean>
  updateJob(job_id: number, data: IJob): Promise<boolean>
}
