'use client'

import { useSemesterStore } from '~activity/_store/semester'

import { SelectActivity } from './SelectActivity'

export const ActivitySection = () => {
  const currentSemester = useSemesterStore((state) => state.currentSemester)

  if (!currentSemester) return <div>loading...</div>

  return <SelectActivity semesterId={currentSemester.semesterId} />
}
