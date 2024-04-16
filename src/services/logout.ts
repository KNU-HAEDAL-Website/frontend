'use client'

import { AxiosError } from 'axios'
import { backendApi } from '@/constant/api'

export const logout = async () => {
  try {
    const accessToken = localStorage.getItem('accessToken')
    await backendApi.post('/logout', accessToken)
    localStorage.removeItem('accessToken')
    return { success: '로그아웃 되었습니다.' }
  } catch (error) {
    if (error instanceof AxiosError) {
      return { error: '잘못된 접근입니다.' }
    }
    return { error: '잠시 후 시도해주세요.' }
  }
}
