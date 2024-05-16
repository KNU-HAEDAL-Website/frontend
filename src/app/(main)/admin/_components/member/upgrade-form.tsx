'use client'
import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { UpgradeMemberSchema } from '@/schema'
import { Form } from '@/components/ui/form'
import { useToast } from "@/components/ui/use-toast"

import { UpgradeFormButton } from './upgrade-form-button'

interface UpgradeButtonProps {
  member: UserUpgrade
}

export const UpgradeForm = ({ member }: UpgradeButtonProps) => {
  const form = useForm<z.infer<typeof UpgradeMemberSchema>>({
    resolver: zodResolver(UpgradeMemberSchema),
    defaultValues: {
      studentNumber: member.studentNumber,
    },
  })

  const { toast } = useToast()

  const onSubmit = (values: z.infer<typeof UpgradeMemberSchema>) => {
    console.log(values)
  }

  const onClick = (type: string) => {
    form.register('isAccepted')
    const isAccepted = type === '수락' ? true : false
    form.setValue('isAccepted', isAccepted)
    form.handleSubmit(onSubmit)()

    toast({
      title: `${member.userName}님을 해달 회원으로 ${type}합니다.`,
    })
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
