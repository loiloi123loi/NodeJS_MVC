import { compare, genSalt, hash } from 'bcrypt'

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await genSalt(10)
  const hashedPassword = await hash(password, salt)
  return hashedPassword
}

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  const match = await compare(password, hashedPassword)
  return match
}
