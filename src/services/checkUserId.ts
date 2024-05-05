'use server'

import { backendApi } from '@/constant/api'

export const checkUserId = async (userId: string) => {
  if (userId.length < 6) {
    return {
      success: false,
      message: 'ID는 6자 이상이어야 합니다.',
    }
  }

  try {
    const res = await backendApi.get(`/join/check-user-id?userId=${userId}`)
    const { success, message } = res.data
    return { success: success, message: message }
  } catch (error) {
    return { success: false, message: '잘못된 접근입니다.' }
  }
}
