'use client'

import * as z from 'zod'
import { AxiosError } from 'axios'

import { backendApi } from '@/constant/api'
import { LoginSchema } from '@/schema'

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values)

  // form 유효성 검사
  if (!validatedFields.success) {
    return { error: '아이디와 비밀번호를 확인해주세요' }
  }

  // json to data-form
  const loginFormData = new FormData()
  loginFormData.append('username', values.username)
  loginFormData.append('password', values.password)

  // 로그인 정보 확인
  try {
    const res = await backendApi.post('/login', loginFormData)
    // access token 저장
    const accessToken = res.headers['authorization']
    localStorage.setItem('accessToken', accessToken)
    /** refresh token 저장: 브라우저에서 자동으로 됨 */

    return { success: '로그인 성공' }
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        return { error: '아이디와 비밀번호를 확인해주세요.' }
      }
      // 커스텀 에러 추가하기
    }
    return { error: '잘못된 접근입니다.' }
  }
}
