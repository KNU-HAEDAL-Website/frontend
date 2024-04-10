import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

interface RegisterFormInputProps {
  inputLabel?: string
  placehoder: string
  isPending: boolean
  type?: string
  value: string
  onChange: () => void
}

export const RegisterFormInput = ({
  inputLabel,
  placehoder,
  isPending = false,
  type = 'text',
  value,
  onChange,
}: RegisterFormInputProps) => {
  return (
    <FormItem>
      <FormLabel>{inputLabel}</FormLabel>
      <FormControl>
        <Input
          placeholder={placehoder}
          disabled={isPending}
          type={type}
          value={value}
          onChange={onChange}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}
