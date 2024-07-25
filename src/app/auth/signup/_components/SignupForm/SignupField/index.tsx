import { ComponentPropsWithoutRef, InputHTMLAttributes } from 'react'
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

interface SignupInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  formLabel: string
  placeholder?: string
  formDescription?: string
}

export const SignupInputField = ({
  name,
  formLabel,
  placeholder,
  formDescription,
  type = 'text',
}: SignupInputFieldProps) => {
  const form = useFormContext()
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{formLabel}</FormLabel>
          <FormControl>
            <Input
              type={type}
              value={field.value}
              onChange={field.onChange}
              placeholder={placeholder}
            />
          </FormControl>
          <FormDescription className="pl-2">{formDescription}</FormDescription>
          <FormMessage className="pl-2" />
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
