'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useAction } from 'next-safe-action/hooks'

import { useToast } from '@/components/ui/use-toast'
import { Signup, SignupSchema } from '@/schema/Auth'
import { signupAction } from '@/service/server/signup'

import { useSignupCheckStore } from '../_stores/signup-check'

export const useSignupForm = () => {
  const { execute, result, isExecuting } = useAction(signupAction)
  const { isValidUserId, isValidStudentNumber } = useSignupCheckStore()
  const { toast } = useToast()
  const isSuccessSignup = result.data?.status === 201

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

  useEffect(() => {
    try {
      if (result.validationErrors) {
        const validationError = Object.values(result.validationErrors).flatMap(
          (error) => error,
        )[0]

        throw new Error(validationError)
      }
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: error.message,
        })
      }
    }
  }, [result, toast])

  const onSubmit = () => {
    try {
      if (!isValidUserId) {
        throw new Error('아이디 중복 확인을 진행해주세요.')
      }

      if (!isValidStudentNumber) {
        throw new Error('학번 중복 확인을 진행해주세요.')
      }

      execute(form.getValues())
    } catch (error) {
      if (error instanceof Error) {
        if (!isValidUserId || !isValidStudentNumber)
          toast({
            title: error.message,
          })
      }
    }
  }

  return {
    form,
    result,
    isExecuting,
    onSubmit,
    isSuccessSignup,
  }
}
