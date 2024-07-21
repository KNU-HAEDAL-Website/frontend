'use client'

import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LoginSchema } from '@/schema/auth'

export const LoginForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: '',
      password: '',
    },
  })

  const onSubmit = (values: LoginSchema) => {
    console.log(values)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="userId">아이디</Label>
        <Input
          {...register('userId')}
          name="userId"
          placeholder="아이디를 입력해주세요"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">비밀번호</Label>
        <Input
          {...register('password')}
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <Button className="mt-4">로그인하기</Button>
      </div>
    </form>
  )
}
