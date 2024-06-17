import { useUserFetch } from '@/services/fetchUsers'
import { useActiveUserStore } from '@/store/active-user'

export const useActivieUsers = () => {
  const { setActiveUser, setError } = useActiveUserStore()
  const { fetchActiveUsers } = useUserFetch()

  const loadActiveUsers = async () => {
    try {
      const res = await fetchActiveUsers()

      if (res?.users) {
        setActiveUser(res.users)
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
