'use client'

import { useSemesterStore } from '~activity/_store/semester'

import { SelectActivity } from './SelectActivity'

export const ActivitySection = () => {
  const { currentSemester } = useSemesterStore()

  if (!currentSemester) return <div>loading...</div>

  return (
    <div>
      <SelectActivity semesterId={currentSemester.semesterId} />
    </div>
  )
}
