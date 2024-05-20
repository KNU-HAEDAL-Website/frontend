import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { GradeMemberSchema } from '@/schema'
import { Button } from '@/components/ui/button'
import { DialogClose, DialogFooter } from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'

import { GradeRadioBox } from './grade-radio-box'
import { useUserGrade } from '../../_hooks/grade-user'

interface GradDialogFormProps {
  user: UserActive
  onSuccess: () => void
}

export const GradeDialogForm = ({ user, onSuccess }: GradDialogFormProps) => {
  const { onClickChagneUserRole } = useUserGrade()

  const onSubmit = async (data: z.infer<typeof GradeMemberSchema>) => {
    await onClickChagneUserRole(user, data.role).then((result) => {
      if (result.success) {
        onSuccess()
      }
    })
  }

  const onClick = () => {
    form.handleSubmit(onSubmit)()
  }

  const form = useForm<z.infer<typeof GradeMemberSchema>>({
    resolver: zodResolver(GradeMemberSchema),
    defaultValues: {
      role: user.role,
    },
  })

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col space-y-2"
      >
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-5">
              <FormLabel className="flex gap-2 text-md">
                <span>
                  {user.userName}({user.studentNumber})
                </span>
                <span>권한 설정</span>
              </FormLabel>
              <FormControl>
                <GradeRadioBox user={user} onChange={field.onChange} />
              </FormControl>
            </FormItem>
          )}
        />
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={onClick} className="w-20 ">
              변경하기
            </Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </Form>
  )
}
