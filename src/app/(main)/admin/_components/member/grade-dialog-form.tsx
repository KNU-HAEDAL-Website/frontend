import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { DialogClose, DialogFooter } from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { GradeMemberSchema } from '@/schema'
import { useGradeMemberStore } from '@/store/grade-member'

import { GradeRadioBox } from './grade-radio-box'

export const GradeDialogForm = () => {
  // api 연결 전 더미데이터 사용
  const { selectedMember } = useGradeMemberStore()

  const onSubmit = (data: z.infer<typeof GradeMemberSchema>) => {
    console.log(data)
  }

  const onClick = () => {
    form.register('studentId')
    form.setValue('studentId', selectedMember.studentId)
    form.handleSubmit(onSubmit)()
  }

  const form = useForm<z.infer<typeof GradeMemberSchema>>({
    resolver: zodResolver(GradeMemberSchema),
  })

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col space-y-2"
      >
        <FormField
          control={form.control}
          name="grade"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-5">
              <FormLabel className="flex gap-2 text-md">
                <span>
                  {selectedMember.name}({selectedMember.studentId})
                </span>
                <span>권한 설정</span>
              </FormLabel>
              <FormControl>
                <GradeRadioBox onChange={field.onChange} />
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
