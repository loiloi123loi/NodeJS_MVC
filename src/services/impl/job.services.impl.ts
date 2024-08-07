import JOB from '~/dao/job.dao'
import { CreateJobReqBody } from '~/models/requests/User.requests'
import { JobService } from '../job.services'
import JobModel, { IJob } from '~/models/Job.model'

class JobServiceImpl implements JobService {
  async createJob(user_id: number, body: CreateJobReqBody): Promise<boolean> {
    try {
      await JOB.create({
        ...body,
        created_by: user_id
      })
      return true
    } catch (err) {
      console.log(`JobService.createJob`, err)
    }
    return false
  }
  async getJob(job_id: number): Promise<IJob | undefined> {
    try {
      const job = await JOB.findOne({
        id: job_id
      })
      return job
    } catch (err) {
      console.log(`JobService.getJob`, err)
    }
  }
  async updateJob(job_id: number, data: Partial<IJob>): Promise<boolean> {
    try {
      await JOB.updateOne(
        {
          id: job_id
        },
        data
      )
      return true
    } catch (err) {
      console.log(`JobService.updateJob`, err)
    }
    return false
  }
}

const jobService = new JobServiceImpl()
export default jobService
