import { expelUser } from '@/services/adminUsers'
import { useToast } from '@/components/ui/use-toast'

export const useUserBan = () => {
  const { toast } = useToast()
  const token = localStorage.getItem('accessToken')

  const onClickExpelUser = async (member: UserActive) => {
    if (!token) {
      toast({ title: '허용되지 않는 요청입니다.' })
      return { success: false }
    }

    const data = await expelUser(token, member.userId)
    if (data?.success) {
      toast({ title: `${member.userName} ${data.message}` })
      return { success: true }
    } else {
      toast({ title: data.message })
      return { success: false }
    }
  }

  return { onClickExpelUser }
}
