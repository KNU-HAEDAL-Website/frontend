'use server'

import { AxiosError } from 'axios'
import { flattenValidationErrors } from 'next-safe-action'

import { API_ERROR_MESSAGES } from '@/constant/errorMessage'
import { actionClient } from '@/lib/safe-action'
import { SignupSchema } from '@/schema/Auth'
import { BACKEND_API } from '@/service/config'

type SignupError = {
  field: string
  message: string
}

export const signupAction = actionClient
  .schema(SignupSchema, {
    handleValidationErrorsShape: (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(
    async ({ parsedInput: { userId, password, studentNumber, userName } }) => {
      try {
        const res = await BACKEND_API.post('/', {
          userId,
          password,
          studentNumber: Number(studentNumber),
          userName,
        })

        return { status: res.status }
      } catch (error) {
        if (error instanceof AxiosError) {
          const res = error.response

          if (res?.status === 400) {
            return {
              message: res.data.message,
              status: res.status,
              errors: res.data.erros as SignupError,
            }
          }

          if (res?.status === 409) {
            return {
              message: res.data.message,
              status: res.status,
            }
          }
        }

        return { message: API_ERROR_MESSAGES.UNKNOWN_ERROR }
      }
    },
  )
