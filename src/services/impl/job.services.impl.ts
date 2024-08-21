import { JobStatusEnum, JobTypeEnum, SortTypeEnum } from '~/constants/enums'
import JOB from '~/dao/job.dao'
import { IJob } from '~/models/Job.model'
import { CreateJobReqBody, GetAllJobsReqQuery } from '~/models/requests/User.requests'
import { AllJobsReponse } from '~/models/responses/Job.responses'
import { getEnumValueOrDefault } from '~/utils/enum'
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
          groupBy: { columns: ['status'] },
          select: {
            status: 'status',
            'COUNT(*)': 'count'
          }
        }
      )
      const filter = stats.reduce(
        (acc, curr: any) => {
          const { status, count } = curr
          acc[status] = count
          return acc
        },
        {} as { [status: string]: number }
      )
      const jobs = await JOB.findAll(
        {
          created_by: user_id
        },
        {
          groupBy: {
            columns: ['year', 'month']
          },
          sortBy: {
            columns: ['year', 'month'],
            order: 'DESC'
          },
          select: {
            'YEAR(created_at)': 'year',
            'MONTH(created_at)': 'month',
            'COUNT(*)': 'count'
          }
        }
      )
      const arr: number[] = Array.from({ length: 12 }, (_) => 0)
      jobs.forEach((item: any) => {
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
  async getAllJobs(user_id: number, query: GetAllJobsReqQuery): Promise<AllJobsReponse | undefined> {
    try {
      const { search, searchStatus, searchType, sort, limit, page } = query
      const objQuery: Partial<IJob> = {
        created_by: user_id
      }
      const conditions: { [column: string]: string } = {}
      if (search) {
        conditions['position'] = search
      }
      if (searchStatus) {
        objQuery.status = getEnumValueOrDefault(JobStatusEnum, searchStatus, undefined)
        if (!objQuery.status) {
          delete objQuery.status
        }
      }
      if (searchType) {
        objQuery.jobType = getEnumValueOrDefault(JobTypeEnum, searchType, undefined)
        if (!objQuery.jobType) {
          delete objQuery.jobType
        }
      }
      const sortType = getEnumValueOrDefault(SortTypeEnum, sort, undefined)
      const sortFields: { columns: string[]; order: 'ASC' | 'DESC' } = {
        columns: ['created_at'],
        order: 'ASC'
      }
      if (sortType) {
        if (sortType === SortTypeEnum.NEWEST) {
          sortFields.columns = ['created_at']
          sortFields.order = 'ASC'
        } else if (sortType === SortTypeEnum.OLDEST) {
          sortFields.columns = ['created_at']
          sortFields.order = 'DESC'
        } else if (sortType === SortTypeEnum.A_Z) {
          sortFields.columns = ['position']
          sortFields.order = 'ASC'
        } else if (sortType === SortTypeEnum.Z_A) {
          sortFields.columns = ['position']
          sortFields.order = 'DESC'
        }
      }
      const curPage = Number(page) || 1
      const curLimit = Number(limit) || 10
      const start = (curPage - 1) * curLimit
      const totalJobs = await JOB.findAll(objQuery, {
        likes: Object.keys(conditions).length > 0 ? conditions : undefined,
        sortBy: sortFields
      })
      const jobsResult = totalJobs?.slice(start, start + curLimit) || []
      return {
        jobs: jobsResult,
        totalJobs: totalJobs?.length || 0,
        numOfPages: Math.ceil((totalJobs?.length ? totalJobs?.length : 0) / curLimit),
        page: curPage
      }
    } catch (err) {
      console.log(`JobService.getAllJobs`, err)
    }
  }
  async deleteJob(user_id: number, job_id: number): Promise<boolean> {
    try {
      await JOB.deleteOne({
        created_by: user_id,
        id: job_id
      })
      return true
    } catch (err) {
      console.log(`JobService.deleteJob`, err)
    }
    return false
  }
}

const jobService = new JobServiceImpl()
export default jobService
