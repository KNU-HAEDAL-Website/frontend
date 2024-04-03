import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { BanMemberSchema } from '@/schema'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'

interface BanFormProps {
  member: ManageUserGrade
}

export const BanForm = ({ member }: BanFormProps) => {
  const form = useForm<z.infer<typeof BanMemberSchema>>({
    resolver: zodResolver(BanMemberSchema),
    defaultValues: {
      studentId: member.studentId,
    },
  })

  const onSubmit = (values: z.infer<typeof BanMemberSchema>) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-3">
        <Button variant="destructive" size="ssm">
          내보내기
        </Button>
      </form>
    </Form>
  )
}
