import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useAction } from 'next-safe-action/hooks'

import { Login, LoginSchema } from '@/schema/Auth'
import { loginAction } from '@/service/server/login'

export const useLoginForm = () => {
  const { execute, result, isExecuting } = useAction(loginAction)
  const [validationError, setValidationError] = useState('')

  const form = useForm<Login>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      userId: '',
      password: '',
    },
  })

  const onSubmit = () => {
    execute(form.getValues())
    form.reset(form.getValues())
  }

  const handleSubmit = form.handleSubmit(onSubmit, (errors) => {
    const errorMessages =
      Object.values(errors).flatMap((error) => error.message)[0] || ''

    setValidationError(errorMessages)
  })

  return {
    form,
    handleSubmit,
    validationError,
    setValidationError,
    result,
    isExecuting,
  }
}
