import JOB from '~/dao/job.dao'
import { CreateJobReqBody } from '~/models/requests/User.requests'
import { JobService } from '../job.services'

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
}

const jobService = new JobServiceImpl()
export default jobService
