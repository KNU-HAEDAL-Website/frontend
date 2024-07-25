'use client'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useAction } from 'next-safe-action/hooks'

import { Signup, SignupSchema } from '@/schema/Auth'
import { signupAction } from '@/service/server/signup'

export const useSignupForm = () => {
  const { execute, result, isExecuting } = useAction(signupAction)

  const form = useForm<Signup>({
    resolver: zodResolver(SignupSchema),
    mode: 'onChange',
    defaultValues: {
      userId: '',
      password: '',
      confirmPassword: '',
      studentNumber: '',
      userName: '',
      checked: false,
    },
  })

  const onSubmit = () => {
    console.log(form.getValues())
    execute(form.getValues())
  }

  return {
    form,
    result,
    isExecuting,
    onSubmit,
  }
}
