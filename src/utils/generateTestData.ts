import { JobStatusEnum, JobTypeEnum } from '~/constants/enums'
import { CreateJobReqBody } from '~/models/requests/User.requests'
import jobService from '~/services/impl/job.services.impl'

const jobPositions = [
  'Software Engineer',
  'Full Stack Developer',
  'Frontend Developer',
  'Backend Developer',
  'Data Scientist',
  'DevOps Engineer',
  'Cloud Architect',
  'Cybersecurity Analyst',
  'Database Administrator',
  'Mobile App Developer',
  'UX/UI Designer',
  'IT Support Specialist',
  'System Administrator',
  'Network Engineer',
  'QA Engineer',
  'Machine Learning Engineer',
  'AI Specialist',
  'IT Project Manager',
  'Scrum Master',
  'Business Analyst'
]

const companies = [
  'Viettel',
  'FPT Software',
  'VinGroup',
  'VNPT',
  'Tiki',
  'VNG Corporation',
  'Grab Vietnam',
  'Shopee Vietnam',
  'Techcombank',
  'Masan Group',
  'Vietcombank',
  'Vietjet Air',
  'THACO (Trường Hải Auto)',
  'Vinamilk',
  'Hoa Phat Group',
  'BIDV',
  'Novaland',
  'DHL Vietnam',
  'Unilever Vietnam',
  'Samsung Vietnam'
]

const location = ['Hồ Chí Minh', 'Đà Nẵng', 'Huế', 'Quy Nhơn', 'Hà Nội']

const getRandomDateInYear = (year: number = 2024) => {
  const start = new Date(year, 0, 1)
  const end = new Date(year, 11, 31)

  const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime())
  return new Date(randomTime)
}

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const generate = async (num: number = 200) => {
  const arr = Array.from({ length: num }, (_, id) => id + 1)
  await Promise.all(
    arr.map(async (id) => {
      const rd1 = getRandomNumber(0, 2)
      const rd2 = getRandomNumber(0, 2)
      const rdDate = getRandomDateInYear()
      const job: CreateJobReqBody & { created_at: Date; updated_at: Date } = {
        position: jobPositions[getRandomNumber(0, jobPositions.length - 1)],
        company: companies[getRandomNumber(0, companies.length - 1)],
        jobLocation: location[getRandomNumber(0, location.length - 1)],
        status: rd1 === 0 ? JobStatusEnum.DECLINED : rd1 === 1 ? JobStatusEnum.INTERVIEW : JobStatusEnum.PENDING,
        jobType: rd2 === 0 ? JobTypeEnum.FULL_TIME : rd1 === 1 ? JobTypeEnum.INTERNSHIP : JobTypeEnum.PART_TIME,
        created_at: rdDate,
        updated_at: rdDate
      }
      const result = await jobService.createJob(9, job)
      if (result) {
        console.log('success', id)
      } else {
        console.log('fail', id)
      }
    })
  )
}

export { generate }
