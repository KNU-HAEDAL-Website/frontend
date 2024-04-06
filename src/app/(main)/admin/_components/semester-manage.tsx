import { semesterDB } from '@/lib/data'

import { ItemLayout } from './item-layout'
import { AddDialog } from './semester/add-dialog'
import { SemesterBox } from './semester/semester-box'

export const SemesterManage = () => {
  return (
    <ItemLayout title="학기 관리">
      <div className="flex flex-row gap-2">
        <div className="w-9 h-9">
          <AddDialog />
        </div>
        <div className="flex flex-row gap-1 overflow-scroll">
          {semesterDB.map((semester) => (
            <SemesterBox key={semester} className="select-none">
              {semester}
            </SemesterBox>
          ))}
        </div>
      </div>
    </ItemLayout>
  )
}
