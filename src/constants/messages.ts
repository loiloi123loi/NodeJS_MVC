export const USER_MESSAGES = {
  FULLNAME_IS_REQUIRED: 'Fullname is required',
  FULLNAME_MUST_BE_A_STRING: 'Fullname must be a string',
  FULLNAME_LENGTH_MUST_BE_FROM_1_TO_30: 'Fullname length must be from 1 to 30 characters',
  LOCATION_IS_REQUIRED: 'Location must be required',
  LOCATION_MUST_BE_A_STRING: 'Location must be a string',
  LOCATION_LENGTH_MUST_BE_FROM_1_TO_30: 'Location length must be from 1 to 30 characters',
  EMAIL_IS_REQUIRED: 'Email is required',
  EMAIL_IS_INVALID: 'Email is not valid',
  EMAIL_ALREADY_EXISTS: 'Email already exists',
  PASSWORD_IS_REQUIRED: 'Password is required',
  PASSWORD_MUST_BE_A_STRING: 'Password must be a string',
  PASSWORD_LENGTH_MUST_BE_FROM_6_TO_50: 'Password length must be between 6 and 50 characters',
  PASSWORD_MUST_BE_STRONG: 'Password must be strong',
  REPEAT_PASSWORD_IS_REQUIRED: 'Repeat password is required',
  REPEAT_PASSWORD_MUST_BE_A_STRING: 'Repeat password must be a string',
  REPEAT_PASSWORD_LENGTH_MUST_BE_FROM_6_TO_50: 'Repeat password length must be between 6 and 50 characters',
  REPEAT_PASSWORD_MUST_BE_STRONG: 'Repeat password must be strong',
  REPEAT_PASSWORD_MUST_BE_THE_SAME_AS_PASSWORD: 'Repeat password must be the same as password',
  REGISTER_SUCCESS: 'User registered successfully',
  LOGIN_SUCCESS: 'Login successful',
  LOGOUT_SUCCESS: 'Logout successful',
  EMAIL_OR_PASSWORD_INCORRECT: 'Email or password incorrect',
  SOMETHING_WAS_WRONG_TRY_AGAIN_LATER: 'Something went wrong, try again later',

  // ADDJOB
  JOB_POSITION_IS_REQUIRED: 'Job position is required',
  JOB_POSITION_MUST_BE_A_STRING: 'Job position must be a string',
  JOB_COMPANY_IS_REQUIRED: 'Job company is required',
  JOB_COMPANY_MUST_BE_A_STRING: 'Job company must be a string',
  JOB_LOCATION_IS_REQUIRED: 'Job location is required',
  JOB_LOCATION_MUST_BE_A_STRING: 'Job location must be a string',
  JOB_STATUS_IS_REQUIRED: 'Job status is required',
  JOB_STATUS_MUST_BE_A_STRING: 'Job status must be a string',
  JOB_STATUS_IS_NOT_ACCESSIBLE: 'Job status is not accessible',
  JOB_TYPE_IS_REQUIRED: 'Job type is required',
  JOB_TYPE_MUST_BE_A_STRING: 'Job type must be a string',
  JOB_TYPE_IS_NOT_ACCESSIBLE: 'Job type is not accessible',
  CREATE_JOB_SUCCESS: 'Create job succeessfully',

  // ADMIN
  NOT_HAVE_PERMISSION: 'You do not have permission to access this site',

  // EDITJOB
  JOB_ID_IS_REQUIRED: 'Job ID is required',
  JOB_ID_MUST_BE_A_NUMBER: 'Job ID must be a number',
  UPDATE_JOB_SUCCESS: 'Update job success',

  // DELETEJOB
  DELETE_JOB_SUCCESS: 'Delete job successfully',

  // PROFILE
  PROFILE_UPDATE_SUCCESS: 'Profile update successfully'
} as const
