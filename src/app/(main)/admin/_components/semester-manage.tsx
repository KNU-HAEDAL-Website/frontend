import { semesterDB } from '@/lib/data'

import { ItemLayout } from './item-layout'
import { AddDialog } from './semester/add-dialog'
import { SemesterDialog } from './semester/semester-dialog'

export const SemesterManage = () => {
  return (
    <ItemLayout title="학기 관리">
      <div className="flex flex-row gap-2">
        <div className="w-9 h-9">
          <AddDialog />
        </div>
        <div className="flex flex-row gap-1 overflow-x-auto">
          {semesterDB.map((semester) => (
            <SemesterDialog key={semester}>{semester}</SemesterDialog>
          ))}
        </div>
      </div>
    </ItemLayout>
  )
}
