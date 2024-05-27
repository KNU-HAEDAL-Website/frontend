'use server'

import { AxiosError } from 'axios'
import * as z from 'zod'

import { backendApi } from '@/constant/api'
import { RegisterSchema } from '@/schema'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const fields = RegisterSchema.safeParse(values)

  if (!fields.success) {
    return { error: '입력된 정보를 다시 확인해주세요.' }
  }

  const registerData = {
    userId: values.userId,
    password: values.password,
    studentNumber: Number(values.studentNumber),
    userName: values.userName,
  }

  try {
    const res = await backendApi.post('/join', registerData)
    if (res.data) {
      return { success: `${res.data.message} 로그인 페이지로 이동합니다.`}
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorType = error.response?.status
      if (errorType === 400) {
        const errorContent = error.response?.data
        return {
          error: `${errorContent.message}\n
          ${errorContent.errors.field}에서 다음과 같은 오류가 발생했습니다.\n
          ${errorContent.errors.message}`,
        }
      }
      if (errorType == 409) {
        const errorContent = error.response?.data
        return { error: errorContent.message }
      }
    }
    return { error: '잘못된 접근입니다.' }
  }
}
