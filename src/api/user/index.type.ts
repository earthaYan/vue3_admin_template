import { GenericResponse } from '../common'

export interface UserLoginParams {
  username: string
  password: string
}
export interface UserLoginResponse extends GenericResponse {
  data: string
}
export interface GetUserInfoParams {}
