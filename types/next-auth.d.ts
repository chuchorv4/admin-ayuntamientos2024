/* eslint-disable @typescript-eslint/no-unused-vars */
import { Session } from "next-auth"
import { JWT } from "next-auth/jwt"

interface IUserProfile {
  admin: boolean
  email: string
  exp: number
  iat: number
  jti: string
  name: string
  picture: string
  sub: string
}

declare module "next-auth" {
  interface Session {
    user: IUserProfile
  }
}
