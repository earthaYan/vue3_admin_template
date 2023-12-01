import instance from '@/utils/api'
import { UserLoginParams, UserLoginResponse } from './index.type'
//统一管理接口
enum API {
  LOGIN_URL = '/user/login',
  UERS_INFO_URL = '/user/info',
}
// 暴露请求函数
export const userLogin = (data: UserLoginParams) => {
  return instance.post<unknown, UserLoginResponse>(API.LOGIN_URL, data)
}
export const getUserInfo = (data: unknown) => {
  return instance.post(API.UERS_INFO_URL, data)
}
