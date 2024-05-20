import { rejectUser, upgradeUser } from '@/services/adminUsers'
import { useToast } from '@/components/ui/use-toast'

export const useUserUpgrade = () => {
  const { toast } = useToast()
  const token = localStorage.getItem('accessToken')

  const onClickApproveUser = async (member: UserInactive) => {
    if (!token) {
      toast({ title: '허용되지 않는 요청입니다.' })
      return { success: false }
    }

    const data = await upgradeUser(token, member.userId)
    if (data?.success) {
      toast({ title: `${member.userName}님의 ${data.message}` })
      return { success: true }
    } else {
      toast({ title: data.message })
      return { success: false }
    }
  }

  const onClickReject = async (member: UserInactive) => {
    if (!token) {
      toast({ title: '허용되지 않는 요청입니다.' })
      return { success: false }
    }

    const data = await rejectUser(token, member.userId)
    if (data?.success) {
      toast({ title: `${member.userName}님의 ${data.message}` })
      return { success: true }
    } else {
      toast({ title: data.message })
      return { success: false }
    }
  }

  return { onClickApproveUser, onClickReject }
}
