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
      const parsedSemesters = parseSemester(res.semesters)
      setSemesters(parsedSemesters)
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
          <AddDialog onSuccess={loadSemesters} />
        </div>
        <div className="flex flex-row gap-1 overflow-x-auto">
          {semesters?.map((semester) => {
            return (
              <SemesterDialog
                key={semester.semesterId}
                semester={semester.semesterName}
                semesterId={semester.semesterId}
                onSuccess={loadSemesters}
              />
            )
          })}
        </div>
      </div>
    </ItemLayout>
  )
}
