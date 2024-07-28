export interface RegisterReqBody {
  fullName: string
  location: string
  email: string
  password: string
  repeat_password: string
}

export interface LoginReqBody {
  email: string
  password: string
}
