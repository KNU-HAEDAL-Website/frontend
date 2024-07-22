'use server'

import { actionClient } from '@/lib/safe-action'
import { AxiosError } from 'axios'

import { API_ERROR_MESSAGES } from '@/constant/errorMessage'
import { LoginSchema } from '@/schema/Auth'

import { BACKEND_API } from '../config'

export const loginAction = actionClient
  .schema(LoginSchema)
  .action(async ({ parsedInput: { userId, password } }) => {
    try {
      const result = await BACKEND_API.post('/login', { userId, password })

      return { message: '로그인에 성공했습니다.', status: result.status }
    } catch (error) {
      if (error instanceof AxiosError) {
        const res = error.response

        if (res?.status === 400 || res?.status === 401) {
          return { message: res.data.message, status: res.status }
        }
      }

      return { message: API_ERROR_MESSAGES.UNKNOWN_ERROR }
    }
  })
