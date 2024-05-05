import { useEffect, useState } from 'react'

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { CheckButton } from '../register/_components/check-button'
import { CheckComment } from '../register/_components/check-comment'

interface FormInputProps {
  inputLabel?: string
  placehoder: string
  isPending: boolean
  type?: string
  value: string
  check?: 'userId' | 'studentId'
  onChange: () => void
}

export const FormInput = ({
  inputLabel,
  placehoder,
  isPending = false,
  type = 'text',
  value,
  check,
  onChange,
}: FormInputProps) => {
  const [checkMessage, setCheckMessage] = useState<CheckResponse>({
    success: false,
    message: '',
  })

  useEffect(() => {
    setCheckMessage({ success: false, message: '' })
  }, [value])

  return (
    <FormItem>
      <FormLabel>{inputLabel}</FormLabel>
      <FormControl>
        <div className="flex gap-2">
          <Input
            placeholder={placehoder}
            disabled={isPending}
            type={type}
            value={value}
            onChange={onChange}
          />
          {check && (
            <CheckButton
              checkType={check}
              value={value}
              setCheckMessage={setCheckMessage}
            />
          )}
        </div>
      </FormControl>
      <CheckComment
        success={checkMessage.success}
        message={checkMessage.message}
      />
      <FormMessage />
    </FormItem>
  )
}
