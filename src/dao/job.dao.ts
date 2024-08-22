import { IJob } from '~/models/Job.model'
import CommonDAO from './common.dao'

class JobDAO extends CommonDAO<IJob> {
  constructor() {
    super(process.env.JOB_TABLE as string)
  }
}

const JOB = new JobDAO()
export default JOB
