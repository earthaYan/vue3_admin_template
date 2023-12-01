export interface UserLoginParams {
  username: string
  password: string
}
interface UserLoginResponseData {
  token?: string
  message?: string
}
export interface UserLoginResponse {
  code: number
  data: UserLoginResponseData
}
