'use client'

import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { register } from '@/actions/register'
import { RegisterSchema } from '@/schema'
import { Button } from '@/components/ui/button'
import { Form, FormField } from '@/components/ui/form'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'

import { RegisterFormCheckbox } from './register-form-checkbox'
import { FormInput } from '../../_components/form-input'

export const RegisterForm = () => {
  const [isPending, startTransition] = useTransition()
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

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError('')
    setSuccess('')
    console.log(values)
    startTransition(() => {
      register(values).then((data) => {
        setError(data.error)
        setSuccess(data.success)
      })
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
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
            />
          )}
        />
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
        <Button type="submit" className="w-full" disabled={isPending}>
          회원가입
        </Button>
      </form>
    </Form>
  )
}
