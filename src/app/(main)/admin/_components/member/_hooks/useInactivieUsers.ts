import { useUserFetch } from '@/services/fetchUsers'
import { useInactiveUserStore } from '@/store/inactive-user'

export const useInactivieUsers = () => {
  const { setInactiveUser, setError } = useInactiveUserStore()
  const { fetchInActiveUsers } = useUserFetch()

  const loadInactiveUsers = async () => {
    try {
      const res = await fetchInActiveUsers()

      if (res?.users) {
        setInactiveUser(res.users)
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
