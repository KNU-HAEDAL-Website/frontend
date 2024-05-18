import {
  getInActiveUsers,
  rejectUser,
  upgradeUser,
} from '@/services/adminUsers'
import { useToast } from '@/components/ui/use-toast'

export const useUserActions = () => {
  const { toast } = useToast()
  const token = localStorage.getItem('accessToken')

  const fetchInActiveUsers = async () => {
    if (!token) {
      return
    }

    const data = await getInActiveUsers(token)
    if (data.success) {
      return { users: data.users }
    } else {
      return { error: data.message }
    }
  }

  const onClickApproveUser = async (member: UserUpgrade) => {
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

  const onClickExpelUser = async (member: UserUpgrade) => {
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

  return { onClickApproveUser, onClickExpelUser, fetchInActiveUsers }
}
