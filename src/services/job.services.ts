import { CreateJobReqBody, GetAllJobsReqQuery } from '~/models/requests/User.requests'
import { AllJobsReponse } from '~/models/responses/Job.responses'

export interface JobService {
  createJob(user_id: number, body: CreateJobReqBody): Promise<boolean>
  getAllJobs(user_id: number, query: GetAllJobsReqQuery): Promise<AllJobsReponse | undefined>
  deleteJob(user_id: number, job_id: number): Promise<boolean>
}
