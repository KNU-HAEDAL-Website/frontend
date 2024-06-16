'use client'

import LocalStorage from '@/constant/localStorage'
import { useAdminSemesterStore } from '@/store/admin-semester'

import { getActivities } from './adminActivities'

export const useActivitiesFetch = () => {
  const token = LocalStorage.getItem('accessToken')
  const { selectedSemester } = useAdminSemesterStore()

  const fetchActivities = async () => {
    if (!token) {
      throw new Error('잘못된 접근입니다. 다시 로그인 해주세요.')
    }

    const data = await getActivities(token, selectedSemester.semesterId)
    if (data.success) {
      return { activities: data.activities }
    } else {
      return { error: data.message }
    }
  }

  return { fetchActivities }
}
