'use client'

import { NameTag } from '@/components/name-tag'
import { Label } from '@/components/ui/label'
import { boardDB } from '@/lib/data'
import { useActivityStore } from '@/store/activity'
import { useSemesterStore } from '@/store/semester'

export const BoardInfomation = () => {
  const { selectedSemester } = useSemesterStore()
  const { selectedActivity } = useActivityStore()

  const infoList = [
    { label: '학기', name: selectedSemester },
    { label: '활동명', name: selectedActivity },
    /** 유저 연결 전 임의의 데이터로 처리 */
    { label: '생성자', name: boardDB[2].user },
  ]

  return (
    <div className="flex justify-center">
      <div className="flex flex-col px-auto w-fit gap-2 justify-evenly pt-6 pb-4 md:flex-row md:gap-10">
        {infoList.map((info, index) => (
          <div
            key={index}
            className="flex justify-start items-center w-fit md:gap-4"
          >
            <Label className="text-md w-14 md:w-fit">{info.label}</Label>
            <NameTag name={info.name} />
          </div>
        ))}
      </div>
    </div>
  )
}
