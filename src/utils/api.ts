import axios from 'axios'
import { ElMessage } from 'element-plus'
const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 6000,
})
instance.interceptors.request.use((config) => {
  return config
})
instance.interceptors.response.use(
  (response) => {
    // 成功的回调
    // 简化数据
    return response.data
  },
  (error) => {
    // 失败的回调
    let message = ''
    // http 状态码
    let status = error.response.status
    switch (status) {
      case 401:
        message = 'token已过期'
        break
      case 403:
        message = '当前无访问权限'
        break
      case 404:
        message = '请求地址不存在'
        break
      case 500:
        message = '服务器内部故障'
        break
      default:
        message = '网络出现问题'
        break
    }
    ElMessage({
      type: 'error',
      message,
    })
    return Promise.reject(error)
  },
)

export default instance
