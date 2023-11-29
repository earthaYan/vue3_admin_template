import instance from '@/utils/api'
import { loginParams, loginResponse } from './index.type'
//统一管理接口
enum API {
  LOGIN_URL = '/user/login',
  UERS_INFO_URL = '/user/info',
}
// 暴露请求函数
export const reqLogin = (data: loginParams) => {
  return instance.post<unknown, loginResponse>(API.LOGIN_URL, data)
}
export const reqGetUserInfo = (data: unknown) => {
  return instance.post(API.UERS_INFO_URL, data)
}
