import { useUserFetch } from '@/services/fetchUsers'
import { useAdminUserStore } from '@/store/admin-user'

export const useActivieUsers = () => {
  const { setActiveUsers, setError } = useAdminUserStore()
  const { fetchActiveUsers } = useUserFetch()

  const loadActiveUsers = async () => {
    try {
      const res = await fetchActiveUsers()

      if (res?.users) {
        setActiveUsers(res.users)
      }
      if (res?.error) {
        setError(res.error)
      }
    } catch (error) {
      setError('예상하지 못한 에러가 발생했습니다.')
    }
  }

  return { loadActiveUsers }
}
