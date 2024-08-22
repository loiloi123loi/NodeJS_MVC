import { IJob } from '~/models/Job.model'
import { CreateJobReqBody, GetAllJobsReqQuery } from '~/models/requests/User.requests'
import { AllJobsReponse } from '~/models/responses/Job.responses'
import { StatsInfo } from './impl/job.services.impl'

export interface JobService {
  createJob(user_id: number, body: CreateJobReqBody): Promise<boolean>
  getAllStatsInfo(user_id: number): Promise<StatsInfo>
  getAllJobs(user_id: number, query: GetAllJobsReqQuery): Promise<AllJobsReponse | undefined>
  deleteJob(user_id: number, job_id: number): Promise<boolean>
  updateJob(job_id: number, data: IJob): Promise<boolean>
}
