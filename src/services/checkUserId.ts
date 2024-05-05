'use server'

import { backendApi } from '@/constant/api'

export const checkUserId = async (userId: string) => {
  try {
    const res = await backendApi.get(`/join/check-user-id?userId=${userId}`)
    const { success, message } = res.data
    return { success: success, message: message }
  } catch (error) {
    return { success: false, message: '잘못된 접근입니다.' }
  }
}
