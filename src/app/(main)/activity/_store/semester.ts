import { create } from 'zustand'

import { Semester } from '@/types/activity'

interface SemesterProps {
  currentSemester?: Semester
  setCurrentSemester: (value: Semester) => void
}

export const useSemesterStore = create<SemesterProps>((set) => ({
  currentSemester: undefined,
  setCurrentSemester: (value) => set(() => ({ currentSemester: value })),
}))
