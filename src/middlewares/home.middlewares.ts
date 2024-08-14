import { checkSchema } from 'express-validator'
import { USER_MESSAGES } from '~/constants/messages'
import { validate } from '~/utils/validation'

export const createJobValidator = validate(
  checkSchema(
    {
      position: {
        notEmpty: {
          errorMessage: USER_MESSAGES.JOB_POSITION_IS_REQUIRED
        },
        isString: {
          errorMessage: USER_MESSAGES.JOB_POSITION_MUST_BE_A_STRING
        },
        trim: true
      },
      company: {
        notEmpty: {
          errorMessage: USER_MESSAGES.JOB_COMPANY_IS_REQUIRED
        },
        isString: {
          errorMessage: USER_MESSAGES.JOB_COMPANY_MUST_BE_A_STRING
        },
        trim: true
      },
      jobLocation: {
        notEmpty: {
          errorMessage: USER_MESSAGES.JOB_LOCATION_IS_REQUIRED
        },
        isString: {
          errorMessage: USER_MESSAGES.JOB_LOCATION_MUST_BE_A_STRING
        },
        trim: true
      },
      status: {
        notEmpty: {
          errorMessage: USER_MESSAGES.JOB_STATUS_IS_REQUIRED
        },
        isString: {
          errorMessage: USER_MESSAGES.JOB_STATUS_MUST_BE_A_STRING
        },
        trim: true
      },
      jobType: {
        notEmpty: {
          errorMessage: USER_MESSAGES.JOB_TYPE_IS_REQUIRED
        },
        isString: {
          errorMessage: USER_MESSAGES.JOB_TYPE_MUST_BE_A_STRING
        },
        trim: true
      }
    },
    ['body']
  )
)

export const getAllJobsValidator = validate(
  checkSchema(
    {
      search: {
        trim: true,
        optional: {
          options: {
            nullable: true
          }
        }
      },
      searchStatus: {
        trim: true,
        optional: {
          options: {
            nullable: true
          }
        }
      },
      searchType: {
        trim: true,
        optional: {
          options: {
            nullable: true
          }
        }
      },
      sort: {
        trim: true,
        optional: {
          options: {
            nullable: true
          }
        }
      },
      limit: {
        trim: true,
        optional: {
          options: {
            nullable: true
          }
        }
      },
      page: {
        trim: true,
        optional: {
          options: {
            nullable: true
          }
        }
      }
    },
    ['query']
  )
)

export const deleteJobValidator = validate(
  checkSchema(
    {
      job_id: {
        notEmpty: {
          errorMessage: USER_MESSAGES.JOB_ID_IS_REQUIRED
        },
        isNumeric: {
          errorMessage: USER_MESSAGES.JOB_ID_MUST_BE_NUMER
        },
        trim: true
      }
    },
    ['params']
  )
)
