import { AxiosError } from 'axios'
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

export const deleteActivity = async (
  token: string,
  semesterId: number,
  activityId: number,
) => {
  try {
    const response = await authorizationApi.delete(
      `/admin/semesters/${semesterId}/activities/${activityId}`,
      {
        headers: { Authorization: token },
      },
    )
    const content = response.data
    return { success: content.success, message: content.message }
  } catch (error) {
    if (error instanceof AxiosError) {
      const status = error.response?.status
      const errorContent = error.response?.data
      if (status === 404) {
        return { success: errorContent.success, message: errorContent.message }
      }
    }

    return { success: false, message: '잘못된 접근입니다.' }
  }
}
