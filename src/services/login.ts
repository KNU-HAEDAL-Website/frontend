'use client'

import { AxiosError } from 'axios'
import * as z from 'zod'

import { backendApi } from '@/constant/api'
import { LoginSchema } from '@/schema'

export const login = async (values: z.infer<typeof LoginSchema>) => {
  try {
    const res = await backendApi.post('/login', values)
    // access token 저장
    const accessToken = res.headers['authorization']
    localStorage.setItem('accessToken', accessToken)
    /** refresh token 저장: 브라우저에서 자동으로 됨 */
    if (res.data) {
      return { success: res.data.message }
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      const status = error.response?.status
      const errorContent = error.response?.data
      if (status === 400 || status === 401) {
        return { error: errorContent.message }
      }
    }
    return { error: '잘못된 접근입니다.' }
  }
}
