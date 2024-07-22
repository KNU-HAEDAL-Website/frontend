'use client'

import { useEffect } from 'react'

import { useLoginForm } from '@/app/auth/login/_hooks/useLoginForm'
import { useRouter } from 'next/navigation'

import { DisplayServerActionCallout } from '@/components/DisplayServerAction/Callout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const LoginForm = () => {
  const router = useRouter()

  const { handleSubmit, form, validationError, result, isExecuting } =
    useLoginForm()

  useEffect(() => {
    if (result.data?.status === 200) {
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
        <Button className="mt-4" disabled={isExecuting}>
          로그인하기
        </Button>
      </div>
      <DisplayServerActionCallout
        result={result}
        validationError={validationError}
      />
    </form>
  )
}
