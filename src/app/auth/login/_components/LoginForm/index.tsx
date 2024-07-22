'use client'

import { useEffect } from 'react'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import LocalStorage from '@/lib/local-storage'

import { LoginErrorMessage } from '~login/_components/LoginErrorMesage'
import { useLoginForm } from '~login/_hooks/useLoginForm'

export const LoginForm = () => {
  const router = useRouter()

  const {
    form,
    handleSubmit,
    result,
    isExecuting,
    validationError,
    setValidationError,
  } = useLoginForm()

  useEffect(() => {
    if (result.data?.status === 200) {
      LocalStorage.setItem('accessToken', result.data.token)
      router.push('/')
    }
  })

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="userId">아이디</Label>
        <Input
          {...form.register('userId')}
          name="userId"
          placeholder="아이디를 입력해주세요"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">비밀번호</Label>
        <Input
          {...form.register('password')}
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <Button
          className="mt-4"
          disabled={isExecuting}
          type="submit"
          onClick={() => setValidationError('')}
        >
          로그인하기
        </Button>
      </div>
      <LoginErrorMessage result={result} validationError={validationError} />
    </form>
  )
}
