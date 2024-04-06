import { semesterDB } from '@/lib/data'

import { ItemLayout } from './item-layout'
import { AddDialog } from './semester/add-dialog'
import { SemesterBox } from './semester/semester-box'

export const SemesterManage = () => {
  return (
    <ItemLayout title="학기 관리">
      <div className="flex gap-2">
        {semesterDB.map((semester) => (
          <SemesterBox key={semester} className="select-none">
            {semester}
          </SemesterBox>
        ))}
        <AddDialog />
      </div>
    </ItemLayout>
  )
}
