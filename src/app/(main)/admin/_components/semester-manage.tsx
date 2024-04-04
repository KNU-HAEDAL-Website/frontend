import { semesterDB } from '@/lib/data'

import { ItemLayout } from './item-layout'
import { ItemBox } from './semester/item-box'

export const SemesterManage = () => {
  return (
    <ItemLayout title="학기 관리">
      <div className="flex gap-2">
        {semesterDB.map((semester) => (
          <ItemBox key={semester} className="select-none">
            {semester}
          </ItemBox>
        ))}
      </div>
    </ItemLayout>
  )
}
