import { CreateJobReqBody } from '~/models/requests/User.requests'
import { StatsInfo } from './impl/job.services.impl'

export interface JobService {
  createJob(user_id: number, body: CreateJobReqBody): Promise<boolean>
  getAllStatsInfo(user_id: number): Promise<StatsInfo>
}
