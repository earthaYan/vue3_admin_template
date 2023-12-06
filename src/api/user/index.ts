import instance from '@/utils/api'
import { GetUserInfoParams, UserLoginParams, UserLoginResponse } from './index.type'
//统一管理接口
enum API {
  LOGIN_URL = '/admin/acl/index/login',
  UERS_INFO_URL = '/admin/acl/index/info',
}
// 暴露请求函数
export const userLogin = (data: UserLoginParams) => {
  return instance.post<unknown, UserLoginResponse>(API.LOGIN_URL, data)
}
export const getUserInfo = (data: GetUserInfoParams) => {
  return instance.post(API.UERS_INFO_URL, data)
}
