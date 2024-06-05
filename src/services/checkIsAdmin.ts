'use client'

import { authorizationApi } from '@/constant/api'
import LocalStorage from '@/constant/localStorage'

export const checkIsAdmin = async () => {
  const token = LocalStorage.getItem('accessToken')

  if (!token) {
    return false
  }

  try {
    await authorizationApi.get('/admin', {
      headers: { Authorization: token },
    })
    return true
  } catch (error) {
    return false
  }
}
