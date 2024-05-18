'use client'

import { AxiosError } from 'axios'
import { authorizationApi } from '@/constant/api'

export const getInActiveUsers = async (token: string) => {
  try {
    const response = await authorizationApi.get('/users/inactive', {
      headers: { Authorization: token },
    })
    return { success: true, users: response.data }
  } catch (error) {
    return { success: false, message: '잘못된 접근입니다.' }
  }
}

export const getActivUsers = async (token: string) => {
  try {
    const response = await authorizationApi.get('/users/active', {
      headers: { Authorization: token },
    })
    return { success: true, users: response.data }
  } catch (error) {
    return { success: false, message: '잘못된 접근입니다.' }
  }
}

export const upgradeUser = async (token: string, userId: string) => {
  try {
    const res = await authorizationApi.patch(
      `/admin/users/${userId}/approve`,
      {},
      {
        headers: { Authorization: token },
      },
    )

    return { success: true, message: res.data.message }
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorType = error.response?.status
      if (errorType == 404) {
        const errorContent = error.response?.data
        return { sucess: false, error: errorContent.message }
      }
    }
    return { success: false, message: '잘못된 접근입니다.' }
  }
}

export const rejectUser = async (token: string, userId: string) => {
  try {
    const res = await authorizationApi.delete(`/admin/users/${userId}/reject`, {
      headers: { Authorization: token },
    })

    return { success: true, message: res.data.message }
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorType = error.response?.status
      if (errorType == 404) {
        const errorContent = error.response?.data
        return { sucess: false, error: errorContent.message }
      }
    }

    return { success: false, message: '잘못된 접근입니다.' }
  }
}
