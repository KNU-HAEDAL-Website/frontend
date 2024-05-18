import { getActivUsers, getInActiveUsers } from '@/services/adminUsers'

export const useUserFetch = () => {
  const token = localStorage.getItem('accessToken')

  const fetchInActiveUsers = async () => {
    if (!token) {
      throw new Error('잘못된 접근입니다. 다시 로그인 해주세요.')
    }

    const data = await getInActiveUsers(token)
    if (data.success) {
      return { users: data.users }
    } else {
      return { error: data.message }
    }
  }

  const fetchActiveUsers = async () => {
    if (!token) {
      throw new Error('잘못된 접근입니다. 다시 로그인 해주세요.')
    }

    const data = await getActivUsers(token)
    if (data.success) {
      return { users: data.users }
    } else {
      return { error: data.message }
    }
  }

  return { fetchInActiveUsers, fetchActiveUsers }
}
