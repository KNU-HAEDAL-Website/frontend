import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { BanMemberSchema } from '@/schema'
import { Button } from '@/components/ui/button'
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Form } from '@/components/ui/form'

interface BanDialogFormProps {
  member: ManageUserGrade
}

export const BanDialogForm = ({ member }: BanDialogFormProps) => {
  const form = useForm<z.infer<typeof BanMemberSchema>>({
    resolver: zodResolver(BanMemberSchema),
    defaultValues: {
      studentId: member.studentId,
    },
  })

  const onSubmit = (values: z.infer<typeof BanMemberSchema>) => {
    console.log(values)
  }

  const onClick = () => {
    form.handleSubmit(onSubmit)()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-3"
      >
        <DialogHeader>
          <DialogTitle>
            정말 {member.name}님을 해달 회원에서 내보내시겠어요?
          </DialogTitle>
          <DialogDescription>
            내보내기 버튼 선택 시, 해당 회원의 계정은 삭제되며 복구되지
            않습니다.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <div className="flex gap-2">
              <Button variant="secondary">취소하기</Button>
              <Button onClick={onClick}>내보내기</Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </form>
    </Form>
  )
}
