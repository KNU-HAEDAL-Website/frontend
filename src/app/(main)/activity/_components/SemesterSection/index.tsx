'use client'

import { useEffect } from 'react'

import { useGetSemesters } from '@/service/data/semester'

import { useSemesterStore } from '~activity/_store/semester'

import { SemesterList } from './SemesterList'

export const SemesterSection = () => {
  const { semesters, status } = useGetSemesters()
  const { currentSemester, setCurrentSemester } = useSemesterStore()

  useEffect(() => {
    if (status === 'success' && !currentSemester) {
      setCurrentSemester(semesters[semesters.length - 1])
    }
  }, [status, currentSemester, setCurrentSemester])

  return <SemesterList semesters={semesters} />
}
