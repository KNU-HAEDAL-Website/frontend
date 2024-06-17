import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

import { GradeMemberSchema } from '@/schema'
import { useAdminUser } from '@/store/admin-user'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'

import { GradeRadioBox } from '../radio-box/grade-radio-box'

interface DialogFormItemProps {
  form: UseFormReturn<z.infer<typeof GradeMemberSchema>>
}

export const DialogFormItem = ({ form }: DialogFormItemProps) => {
  const { selectedUser } = useAdminUser()

  return (
    <FormField
      control={form.control}
      name="role"
      render={({ field }) => (
        <FormItem className="flex flex-col gap-5">
          <FormLabel className="flex gap-2 text-md">
            {selectedUser.userName}({selectedUser.studentNumber}) 권한 설정
          </FormLabel>
          <FormControl>
            <GradeRadioBox onChange={field.onChange} />
          </FormControl>
        </FormItem>
      )}
    />
  )
}
