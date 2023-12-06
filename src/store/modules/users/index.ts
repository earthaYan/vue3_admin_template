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
        this.token = result.data
        setLocalStorageItem(TOKEN, result.data ?? '')
        return Promise.resolve()
      } else {
        return Promise.reject(result.data)
      }
    },
  },
  getters: {},
})
export default useUserStore
