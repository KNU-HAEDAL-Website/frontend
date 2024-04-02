import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { UpgradeMemberSchema } from '@/schema'
import { Form } from '@/components/ui/form'

import { UpgradeFormButton } from './upgrade-form-button'

interface UpgradeButtonProps {
  member: ManageUserUpgrade
}

export const UpgradeForm = ({ member }: UpgradeButtonProps) => {
  const form = useForm<z.infer<typeof UpgradeMemberSchema>>({
    resolver: zodResolver(UpgradeMemberSchema),
    defaultValues: {
      studentId: member.studentId,
    },
  })

  const onSubmit = (values: z.infer<typeof UpgradeMemberSchema>) => {
    console.log(values)
  }

  const onClick = (type: string) => {
    form.register('isAccepted')
    const isAccepted = type === '수락' ? true : false
    form.setValue('isAccepted', isAccepted)
    form.handleSubmit(onSubmit)()
  }

  return (
    <Form {...form}>
      <form onSubmit={(e) => e.preventDefault()} className="flex gap-3">
        <UpgradeFormButton type="수락" onClick={() => onClick('수락')} />
        <UpgradeFormButton type="거절" onClick={() => onClick('거절')} />
      </form>
    </Form>
  )
}
