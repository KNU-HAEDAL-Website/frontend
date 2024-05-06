'use client'

import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { RegisterSchema } from '@/schema'
import { register } from '@/services/register'
import { useRegisterCheckStore } from '@/store/register-check'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
import { Button } from '@/components/ui/button'
import { Form, FormField } from '@/components/ui/form'

import { FormInput } from '../../_components/form-input'
import { RegisterFormCheckbox } from './register-form-checkbox'

export const RegisterForm = () => {
  const [isPending, startTransition] = useTransition()
  const { successUserId, successStudentNumber } = useRegisterCheckStore()
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      userId: '',
      password: '',
      confirmPassword: '',
      studentNumber: '',
      userName: '',
      checked: false,
    },
  })

  const onClick = () => {
    setError('')
    setSuccess('')

    if (!successUserId) {
      setError('아이디 중복 확인을 진행해주세요.')
      return
    }
    if (!successStudentNumber) {
      setError('학번 중복 확인을 진행해주세요.')
      return
    }
    form.handleSubmit(onSubmit)()
  }

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    console.log(values)
    startTransition(() => {
      register(values).then((data) => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={(e) => e.preventDefault()} className="w-full space-y-4">
        <div>
          <FormField
            control={form.control}
            name="userId"
            render={({ field }) => (
              <FormInput
                inputLabel="아이디"
                placehoder="hobanu"
                isPending={isPending}
                value={field.value}
                onChange={field.onChange}
                check="userId"
                description="- ID는 영어와 숫자를 포함해 6~12자리로 입력해주세요."
              />
            )}
          />
        </div>
        <div className="space-y-1">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormInput
                inputLabel="비밀번호"
                placehoder="********"
                isPending={isPending}
                type="password"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormInput
                placehoder="비밀번호 확인"
                isPending={isPending}
                type="password"
                value={field.value}
                onChange={field.onChange}
                description="- 비밀번호는 영문, 숫자, 특수문자를 포함해 8~20자로 입력해주세요."
              />
            )}
          />
        </div>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="studentNumber"
            render={({ field }) => (
              <FormInput
                inputLabel="학번"
                placehoder="2000123456"
                isPending={isPending}
                type="number"
                value={field.value}
                onChange={field.onChange}
                check="studentNumber"
              />
            )}
          />
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormInput
                inputLabel="이름"
                placehoder="호반우"
                isPending={isPending}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <FormField
            control={form.control}
            name="checked"
            render={({ field }) => (
              <RegisterFormCheckbox
                checkLabel="관리자의 승인 후 회원가입이 완료됩니다."
                checked={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button
          type="submit"
          className="w-full"
          disabled={isPending}
          onClick={onClick}
        >
          회원가입
        </Button>
      </form>
    </Form>
  )
}
