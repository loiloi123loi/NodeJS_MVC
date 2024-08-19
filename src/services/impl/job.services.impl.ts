import JOB from '~/dao/job.dao'
import USER from '~/dao/user.dao'
import { CreateJobReqBody } from '~/models/requests/User.requests'
import { JobService } from '../job.services'

export interface DashboardInfo {
  totalUsers: number
  totalJobs: number
}

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
  async getDashboardInfo(user_id: number): Promise<DashboardInfo> {
    try {
      const totalUsers = (await USER.findAll({ verified: true }))?.length || 0
      const totalJobs = (await JOB.findAll({}))?.length || 0
      return {
        totalUsers,
        totalJobs
      }
    } catch (err) {
      console.log(`JobService.createJob`, err)
    }
    return {
      totalUsers: 0,
      totalJobs: 0
    }
  }
}

const jobService = new JobServiceImpl()
export default jobService
