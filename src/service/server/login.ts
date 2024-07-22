'use server'

import { AxiosError } from 'axios'

import { API_ERROR_MESSAGES } from '@/constant/errorMessage'
import { actionClient } from '@/lib/safe-action'
import { LoginSchema } from '@/schema/Auth'
import { BACKEND_API } from '@/service/config'

export const loginAction = actionClient
  .schema(LoginSchema)
  .action(async ({ parsedInput: { userId, password } }) => {
    try {
      const res = await BACKEND_API.post('/login', { userId, password })

      const accessToken = res.headers['authorization']

      return { status: res.status, token: accessToken }
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
