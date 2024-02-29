'use server'

import * as z from 'zod'
import { RegisterSchema } from '@/schema'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const fields = RegisterSchema.safeParse(values)

  if (!fields.success) {
    return { error: '입력된 정보를 다시 확인해주세요.' }
  }

  //추가 학번으로 중복 회원 검사
  return { success: '관리자의 승인을 기다리는중...' }
}
