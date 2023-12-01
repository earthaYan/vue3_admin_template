import { defineStore } from 'pinia'
import { userLogin } from '@/api/user'
import { UserLoginParams } from '@/api/user/index.type'
import { UserState } from './index.type'
import {
  TOKEN,
  getLocalStorageItemWithDefault,
  setLocalStorageItem,
} from '@/utils/localStorageWrapper'
const useUserStore = defineStore('user', {
  state: (): UserState => {
    return {
      token: getLocalStorageItemWithDefault(TOKEN, ''),
    }
  },
  actions: {
    async handleUserLogin(data: UserLoginParams) {
      let result = await userLogin(data)
      if (result.code === 200) {
        this.token = result.data.token
        setLocalStorageItem(TOKEN, result.data.token ?? '')
        return Promise.resolve()
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})
export default useUserStore
