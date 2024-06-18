import { useUserFetch } from '@/services/fetchUsers'
import { useAdminUserStore } from '@/store/admin-user'

export const useInactivieUsers = () => {
  const { setInactiveUsers, setError } = useAdminUserStore()
  const { fetchInActiveUsers } = useUserFetch()

  const loadInactiveUsers = async () => {
    try {
      const res = await fetchInActiveUsers()

      if (res?.users) {
        setInactiveUsers(res.users)
      }
      if (res?.error) {
        setError(res.error)
      }
    } catch (error) {
      setError('예상하지 못한 에러가 발생했습니다.')
    }
  }

  return { loadInactiveUsers }
}
