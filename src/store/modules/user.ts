import { defineStore } from 'pinia'
import { userLogin } from '@/api/user'
import { loginParams } from '@/api/user/index.type'
const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: localStorage.getItem('TOKEN'),
    }
  },
  actions: {
    async handleUserLogin(data: loginParams) {
      let result: any = await userLogin(data)
      if (result.code === 200) {
        this.token = result.data.token
        localStorage.setItem('TOKEN', result.data.token)
        return Promise.resolve()
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})
export default useUserStore
