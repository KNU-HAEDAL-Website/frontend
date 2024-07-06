import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { GradeMemberSchema } from '@/schema'

import { useUserGrade } from '../../../_hooks/grade-user'
import { useActivieUsers } from './useActivieUsers'

export const useGradeForm = (user: UserActive) => {
  const { onClickChagneUserRole } = useUserGrade()
  const { loadActiveUsers } = useActivieUsers()

  const form = useForm<z.infer<typeof GradeMemberSchema>>({
    resolver: zodResolver(GradeMemberSchema),
  })

  const onSubmit = async (data: z.infer<typeof GradeMemberSchema>) => {
    const result = await onClickChagneUserRole(user, data.role)
    
    if (result.success) {
        loadActiveUsers()
    }
  }

  return { form, onSubmit }
}
