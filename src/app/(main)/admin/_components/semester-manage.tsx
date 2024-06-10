import { useCallback, useEffect, useState } from 'react'

import { useSemesterFetch } from '@/services/fetchSemesters'

import { parseSemester } from '../_utils/parseSemester'
import { ItemLayout } from './item-layout'
import { AddDialog } from './semester/add-dialog'
import { SemesterDialog } from './semester/semester-dialog'

export const SemesterManage = () => {
  const { fetchSemester } = useSemesterFetch()
  const [semesters, setSemesters] = useState<Semester[]>()

  const loadSemesters = useCallback(async () => {
    const res = await fetchSemester()

    if (res?.semesters) {
      setSemesters(res.semesters)
    }
    if (res?.error) {
      console.error(res.error)
    }
  }, [fetchSemester])

  useEffect(() => {
    loadSemesters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ItemLayout title="학기 관리">
      <div className="flex flex-row gap-2">
        <div className="w-9 h-9">
          <AddDialog />
        </div>
        <div className="flex flex-row gap-1 overflow-x-auto">
          {semesters?.map((pre) => {
            const semester = parseSemester(pre.semesterName)
            return <SemesterDialog key={pre.semesterId} semester={semester} />
          })}
        </div>
      </div>
    </ItemLayout>
  )
}
