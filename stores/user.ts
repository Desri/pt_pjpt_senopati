import { defineStore } from 'pinia'
import type { Login, ResponseLogin } from '~/types/login'

export const useLoginStore = defineStore('login', () => {
  const isAuth = ref<boolean>(false)
  const isIncorectAccount = ref<boolean>(false)
  const token = useCookie('MY_COOKIE', {
    maxAge: 60 * 60
  });

  const setToken = (data?: string) => (token.value = data)

  const signIn = async (data: Login) => {
    try {
      const res = await $fetch<ResponseLogin>('/api/auth/login', {
        method: 'POST',
        body: data
      })
      if (!res.success) {
        isIncorectAccount.value = true
      }
      isAuth.value = true
      setToken(JSON.stringify(res.data))
      return res
    } catch (error) {
      isAuth.value = false
      setToken()
    }
  };

  const logout = () => {
    setToken();
    isAuth.value = false
  };

  return {
    token,
    isAuth,
    isIncorectAccount,
    signIn,
    setToken,
    logout,
  }
})
