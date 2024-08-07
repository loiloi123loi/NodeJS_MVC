import { CreateJobReqBody } from '~/models/requests/User.requests'

export interface JobService {
  createJob(user_id: number, body: CreateJobReqBody): Promise<boolean>
}
