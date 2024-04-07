'use server'

import { LoginSchema } from '@/schema'
import * as z from 'zod'

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values)

  /** 기능 추가하기 */
  if (!validatedFields.success) {
    return { error: '아이디와 비밀번호를 확인해주세요' }
  }

  return { success: '로그인 성공' }
}
