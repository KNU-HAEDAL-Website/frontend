'use client'

import { NameTag } from '@/components/name-tag'
import { Label } from '@/components/ui/label'
import { useActivityStore } from '@/store/activity'
import { useSemesterStore } from '@/store/semester'

export const BoardInfomation = () => {
  const { selectedSemester } = useSemesterStore()
  const { selectedActivity } = useActivityStore()

  const infoList = [
    { label: '학기', name: selectedSemester },
    { label: '활동명', name: selectedActivity },
    /** 유저 연결 전 임의의 데이터로 처리 */
    { label: '생성자', name: '김아진' },
  ]

  return (
    <div className="flex flex-col items-center gap-2 justify-evenly pt-6 pb-4 md:flex-row md:gap-0">
      {infoList.map((info, index) => (
        <div key={index} className="flex items-center gap-4 w-fit">
          <Label className="text-md">{info.label}</Label>
          <NameTag name={info.name} />
        </div>
      ))}
    </div>
  )
}
