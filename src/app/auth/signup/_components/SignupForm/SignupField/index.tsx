import {
  ComponentPropsWithoutRef,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react'
import { useFormContext } from 'react-hook-form'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { Checkbox } from '@/components/ui/checkbox'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { CheckRespose } from '@/service/server/signup'

import { CheckStudentNumberButton, CheckUserIdButton } from './CheckButton'
import { CheckResultMessage } from './CheckResultMessage'

interface SignupInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  formLabel: string
  placeholder?: string
  formDescription?: string
  doubleCheck?: 'userId' | 'studentNumber'
}

export const SignupInputField = ({
  name,
  formLabel,
  placeholder,
  formDescription,
  type = 'text',
  doubleCheck,
}: SignupInputFieldProps) => {
  const form = useFormContext()
  const fieldValue = form.watch(name)
  const [checkResult, setCheckResult] = useState<CheckRespose>()

  useEffect(() => {
    setCheckResult({ success: false, message: '' })
  }, [fieldValue])

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{formLabel}</FormLabel>
          <FormControl>
            <div className="flex gap-2">
              <Input
                type={type}
                value={field.value}
                onChange={field.onChange}
                placeholder={placeholder}
              />
              {doubleCheck === 'userId' && (
                <CheckUserIdButton
                  value={field.value}
                  setCheckResult={setCheckResult}
                />
              )}
              {doubleCheck === 'studentNumber' && (
                <CheckStudentNumberButton
                  value={field.value}
                  setCheckResult={setCheckResult}
                />
              )}
            </div>
          </FormControl>
          <FormDescription className="pl-2">{formDescription}</FormDescription>
          <FormMessage className="pl-2" />
          {checkResult && <CheckResultMessage checkResult={checkResult} />}
        </FormItem>
      )}
    />
  )
}

interface SignupCheckboxFieldProps
  extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  name: string
  formLabel: string
}

export const SignupCheckboxField = ({
  name,
  formLabel,
}: SignupCheckboxFieldProps) => {
  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl className="flex items-center gap-2 pl-2 pt-4">
            <div>
              <Checkbox
                id={name}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
              <FormLabel htmlFor={name}>{formLabel}</FormLabel>
            </div>
          </FormControl>
          <FormMessage className="pl-3" />
        </FormItem>
      )}
    />
  )
}
