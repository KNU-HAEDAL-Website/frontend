'use client'

import { FormEvent, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useAction } from 'next-safe-action/hooks'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import LocalStorage from '@/lib/local-storage'
import { loginAction } from '@/service/server/login'

import { LoginErrorMessage } from '~auth/login/_components/LoginErrorMesage'

type LoginSchema = {
  userId: string
  password: string
}

export const LoginForm = () => {
  const router = useRouter()
  const { execute, result, isExecuting } = useAction(loginAction)

  const form = useForm<LoginSchema>({
    defaultValues: {
      userId: '',
      password: '',
    },
  })

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    execute(form.getValues())
    form.reset(form.getValues())
  }

  useEffect(() => {
    if (result.data?.status === 200) {
      LocalStorage.setItem('accessToken', result.data.token)
      router.push('/')
    }
  })

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="userId">아이디</Label>
        <Input {...form.register('userId')} name="userId" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">비밀번호</Label>
        <Input {...form.register('password')} name="password" type="password" />
        <Button className="mt-8" disabled={isExecuting} type="submit">
          로그인하기
        </Button>
      </div>
      <LoginErrorMessage result={result} />
    </form>
  )
}
