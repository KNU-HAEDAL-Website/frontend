'use server'

import { backendApi } from '@/constant/api'

export const checkStudentNumber = async (studentNumber: number) => {
  try {
    const res = await backendApi.get(
      `/join/check-student-number?studentNumber=${studentNumber}`,
    )
    const { success, message } = res.data
    return { success: success, message: message }
  } catch (error) {
    return { success: false, message: '잘못된 접근입니다.' }
  }
}
