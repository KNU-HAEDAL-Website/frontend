import { authorizationApi } from '@/constant/api'

export const getActivities = async (token: string, semesterId: number) => {
  try {
    const response = await authorizationApi.get(
      `/semesters/${semesterId}/activities`,
      {
        headers: { Authorization: token },
      },
    )
    return { success: true, activities: response.data }
  } catch (error) {
    return { success: false, message: '잘못된 접근입니다.' }
  }
}
