import { AxiosError } from 'axios'
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

export const addSemesters = async (token: string, values: string) => {
  const semesterData = {
    semesterName: values,
  }

  try {
    const response = await authorizationApi.post(
      '/admin/semesters',
      semesterData,
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
      if (status === 409) {
        return { success: errorContent.success, message: errorContent.message }
      }
    }

    return { success: false, message: '잘못된 접근입니다.' }
  }
}

export const deleteSemester = async (token: string, semesterId: number) => {
  try {
    const response = await authorizationApi.delete(
      `/admin/semesters/${semesterId}`,
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
      if (status === 404 || status === 409) {
        return { success: errorContent.success, message: errorContent.message }
      }
    }

    return { success: false, message: '잘못된 접근입니다.' }
  }
}
