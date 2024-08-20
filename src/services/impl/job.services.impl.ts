import { JobStatusEnum, JobTypeEnum, SortTypeEnum } from '~/constants/enums'
import JOB from '~/dao/job.dao'
import { IJob } from '~/models/Job.model'
import { CreateJobReqBody, GetAllJobsReqQuery } from '~/models/requests/User.requests'
import { AllJobsReponse } from '~/models/responses/Job.responses'
import { getEnumValueOrDefault } from '~/utils/enum'
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
  async getAllJobs(user_id: number, query: GetAllJobsReqQuery): Promise<AllJobsReponse | undefined> {
    try {
      const { search, searchStatus, searchType, sort, limit, page } = query
      const objQuery: Partial<IJob> = {
        created_by: user_id
      }
      const conditions: string[] = []
      if (search) {
        objQuery.position = search
        conditions.push('position')
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
      const sortFields: { column: string; order: 'ASC' | 'DESC' } = {
        column: 'created_at',
        order: 'ASC'
      }
      if (sortType) {
        console.log(sortType)
        if (sortType === SortTypeEnum.NEWEST) {
          sortFields.column = 'created_at'
          sortFields.order = 'ASC'
        } else if (sortType === SortTypeEnum.OLDEST) {
          sortFields.column = 'created_at'
          sortFields.order = 'DESC'
        } else if (sortType === SortTypeEnum.A_Z) {
          sortFields.column = 'position'
          sortFields.order = 'ASC'
        } else if (sortType === SortTypeEnum.Z_A) {
          sortFields.column = 'position'
          sortFields.order = 'DESC'
        }
      }
      const curPage = Number(page) || 1
      const curLimit = Number(limit) || 10
      const start = (curPage - 1) * curLimit
      const totalJobs = await JOB.findAll(objQuery, conditions, sortFields.column ? sortFields : undefined)
      console.log(totalJobs)
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
