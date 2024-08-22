import { checkSchema } from 'express-validator'
import { JobStatusEnum, JobTypeEnum } from '~/constants/enums'
import { USER_MESSAGES } from '~/constants/messages'
import { validate } from '~/utils/validation'

export const jobValidator = validate(
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
        trim: true,
        custom: {
          options: (value) => Object.values(JobStatusEnum).includes(value),
          errorMessage: USER_MESSAGES.JOB_STATUS_IS_NOT_ACCESSIBLE
        }
      },
      jobType: {
        notEmpty: {
          errorMessage: USER_MESSAGES.JOB_TYPE_IS_REQUIRED
        },
        isString: {
          errorMessage: USER_MESSAGES.JOB_TYPE_MUST_BE_A_STRING
        },
        trim: true,
        custom: {
          options: (value) => Object.values(JobTypeEnum).includes(value),
          errorMessage: USER_MESSAGES.JOB_TYPE_IS_NOT_ACCESSIBLE
        }
      }
    },
    ['body']
  )
)

export const editJobParamsValidator = validate(
  checkSchema(
    {
      id: {
        notEmpty: {
          errorMessage: USER_MESSAGES.JOB_ID_IS_REQUIRED
        },
        trim: true,
        isNumeric: {
          errorMessage: USER_MESSAGES.JOB_ID_MUST_BE_A_NUMBER
        }
      }
    },
    ['params']
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
          errorMessage: USER_MESSAGES.JOB_ID_MUST_BE_A_NUMBER
        },
        trim: true
      }
    },
    ['params']
  )
)

export const updateProfileValidator = validate(
  checkSchema(
    {
      fullName: {
        notEmpty: {
          errorMessage: USER_MESSAGES.FULLNAME_IS_REQUIRED
        },
        isString: {
          errorMessage: USER_MESSAGES.FULLNAME_MUST_BE_A_STRING
        },
        trim: true,
        isLength: {
          options: {
            min: 1,
            max: 30
          },
          errorMessage: USER_MESSAGES.FULLNAME_LENGTH_MUST_BE_FROM_1_TO_30
        }
      },
      location: {
        notEmpty: {
          errorMessage: USER_MESSAGES.LOCATION_IS_REQUIRED
        },
        isString: {
          errorMessage: USER_MESSAGES.LOCATION_MUST_BE_A_STRING
        },
        trim: true,
        isLength: {
          options: {
            min: 1,
            max: 30
          },
          errorMessage: USER_MESSAGES.LOCATION_LENGTH_MUST_BE_FROM_1_TO_30
        }
      }
    },
    ['body']
  )
)
