'use client'

import LocalStorage from '@/constant/localStorage'

import { getSemesters } from './adminSemesters'

export const useSemesterFetch = () => {
  const token = LocalStorage.getItem('accessToken')

  const fetchSemester = async () => {
    if (!token) {
      throw new Error('잘못된 접근입니다. 다시 로그인 해주세요.')
    }

    const data = await getSemesters(token)
    if (data.success) {
      return { semesters: data.semesters }
    } else {
      return { error: data.message }
    }
  }

  return { fetchSemester }
}
