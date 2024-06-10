import { authorizationApi } from '@/constant/api'

export const getSemesters = async (token: string) => {
  try {
    const response = await authorizationApi.get('/semesters', {
      headers: { Authorization: token },
    })
    return { success: true, semesters: response.data }
  } catch (error) {
    return { success: false, message: '잘못된 접근입니다.' }
  }
}
