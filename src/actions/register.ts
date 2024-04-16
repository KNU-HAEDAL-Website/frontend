'use server'

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

  backendApi
    .post('/join', registerData)
    .then((res) => {
      console.log(res.data)
    })
    .catch((error) => {
      if (error) {
        return { error: '잘못된 접근입니다.' }
      }
    })

  //추가 학번으로 중복 회원 검사
  return { success: '관리자의 승인을 기다리는중...' }
}
