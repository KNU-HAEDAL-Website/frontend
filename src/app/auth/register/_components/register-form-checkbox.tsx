import { Checkbox } from '@/components/ui/checkbox'
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

interface RegisterFormCheckboxProps {
  checkLabel: string
  checked: boolean
  onChange: () => void
}

export const RegisterFormCheckbox = ({
  checkLabel,
  checked,
  onChange,
}: RegisterFormCheckboxProps) => {
  return (
    <FormItem>
      <FormControl className="flex items-center gap-2 pt-4">
        <div>
          <Checkbox checked={checked} onCheckedChange={onChange} />
          <FormLabel>{checkLabel}</FormLabel>
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}
