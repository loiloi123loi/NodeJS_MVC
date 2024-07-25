import { LoginProvider } from '~/constants/enums'

export interface IUser {
  id?: number
  fullName: string
  location: string
  email: string
  password: string
  verified: boolean
  provider: number
  activeToken: string
  activeTokenExp?: Date
  forgotPasswordToken?: string
  updated_at?: Date
  created_at?: Date
}

export default class User {
  id?: number
  fullName: string
  location: string
  email: string
  password: string
  verified: boolean
  provider: number
  activeToken: string
  activeTokenExp: Date
  forgotPasswordToken: string
  updated_at?: Date
  created_at?: Date

  constructor({
    id,
    fullName,
    location,
    email,
    password,
    verified,
    provider,
    activeToken,
    activeTokenExp,
    forgotPasswordToken,
    updated_at,
    created_at
  }: IUser) {
    const now = new Date()
    this.id = id
    this.fullName = fullName
    this.location = location
    this.email = email
    this.password = password
    this.verified = verified
    this.provider = provider
    this.activeToken = activeToken
    this.activeTokenExp = activeTokenExp || new Date(now.getTime() + 60 * 60 * 1000)
    this.forgotPasswordToken = forgotPasswordToken || ''
    this.updated_at = updated_at || now
    this.created_at = created_at || now
  }
}
