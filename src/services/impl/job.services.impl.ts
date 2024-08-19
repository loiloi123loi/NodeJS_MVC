import JOB from '~/dao/job.dao'
import { CreateJobReqBody } from '~/models/requests/User.requests'
import { JobService } from '../job.services'

export interface StatsInfo {
  defaultStats: { pending: number; interview: number; declined: number }
  monthlyApplications: Array<number>
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
  async getAllStatsInfo(user_id: number): Promise<StatsInfo> {
    try {
      const stats = await JOB.findAll(
        {
          created_by: user_id
        },
        {
          columns: ['status']
        },
        undefined,
        {
          columns: ['status', 'COUNT(*) AS count']
        }
      )
      const filter = stats.reduce((acc, curr) => {
        const { status, count } = curr
        acc[status] = count
        return acc
      }, {})
      const jobs = await JOB.findAll(
        {
          created_by: user_id
        },
        { columns: ['year', 'month'] },
        {
          columns: ['year', 'month'],
          order: 'DESC'
        },
        { columns: ['YEAR(created_at) AS year', 'MONTH(created_at) AS month', 'COUNT(*) as count'] }
      )
      const arr: number[] = Array.from({ length: 12 }, (_) => 0)
      jobs.forEach((item) => {
        console.log(item.year, new Date().getFullYear())
        if (item.year === new Date().getFullYear()) {
          arr[item.month - 1] = item.count
        }
      })
      return {
        defaultStats: {
          pending: filter.pending || 0,
          interview: filter.interview || 0,
          declined: filter.declined || 0
        },
        monthlyApplications: arr
      }
    } catch (err) {
      console.log(`JobService.getAllStatsInfo`, err)
    }
    return {
      defaultStats: { pending: 0, interview: 0, declined: 0 },
      monthlyApplications: Array.from({ length: 12 }, (_) => 0)
    }
  }
}

const jobService = new JobServiceImpl()
export default jobService
