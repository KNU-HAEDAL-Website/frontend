import { useEffect } from 'react'

import { useSemesterFetch } from '@/services/fetchSemesters'
import { useAdminSemesterStore } from '@/store/admin-semester'

import { parseSemester } from '../../_utils/parseSemester'
import { ItemLayout } from '../ui/item-layout'
import { AddDialog } from './add-dialog'
import { ActivityDialog } from '../activity/activity-dialog'

export const SemesterManage = () => {
  const { fetchSemester } = useSemesterFetch()
  const { semesters, setSemesters } = useAdminSemesterStore()

  const loadSemesters = async () => {
    const res = await fetchSemester()

    if (res?.semesters) {
      const parsedSemesters = parseSemester(res.semesters)
      setSemesters(parsedSemesters)
    }
    if (res?.error) {
      console.error(res.error)
    }
  }

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
              <ActivityDialog
                key={semester.semesterId}
                semester={semester}
                onSuccess={loadSemesters}
              />
            )
          })}
        </div>
      </div>
    </ItemLayout>
  )
}
