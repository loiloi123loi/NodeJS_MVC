import { CreateJobReqBody } from '~/models/requests/User.requests'
import { DashboardInfo } from './impl/job.services.impl'

export interface JobService {
  createJob(user_id: number, body: CreateJobReqBody): Promise<boolean>
  getDashboardInfo(user_id: number): Promise<DashboardInfo>
}
