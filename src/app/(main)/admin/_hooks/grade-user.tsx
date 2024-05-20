import { changeUserRole } from '@/services/adminUsers'
import { useToast } from '@/components/ui/use-toast'

export const useUserGrade = () => {
  const { toast } = useToast()
  const token = localStorage.getItem('accessToken')

  const onClickChagneUserRole = async (
    member: UserActive,
    changeRole: string,
  ) => {
    if (!token) {
      toast({ title: '허용되지 않는 요청입니다.' })
      return { success: false }
    }

    const data = await changeUserRole(token, member.userId, changeRole)
    if (data?.success) {
      toast({ title: `${member.userName} ${data.message}` })
      return { success: true }
    } else {
      toast({ title: data.message })
      return { success: false }
    }
  }

  return { onClickChagneUserRole }
}
