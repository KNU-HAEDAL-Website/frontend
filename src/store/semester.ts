import { period } from '@/lib/data'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface semesterProps {
  semester: string
  setSemester: (value: string) => void
  setPreviousSemester: () => void
  setNextSemester: () => void
  getSemesterIndex: (semester: string) => number
}

export const useSemesterStore = create<semesterProps>()(
  devtools((set) => ({
    semester: '2023-2',
    setSemester: (value) => set(() => ({ semester: value })),
    setPreviousSemester: () => {
      set((value) => {
        const index = value.getSemesterIndex(value.semester)
        const previousIndex = index > 0 ? index - 1 : 0
        return { semester: period[previousIndex] }
      })
    },
    setNextSemester: () => {
      set((value) => {
        const index = value.getSemesterIndex(value.semester)
        const n = period.length - 1
        const nextIndex = index < n ? index + 1 : n
        return { semester: period[nextIndex] }
      })
    },
    getSemesterIndex: (semester) => {
      const index = period.findIndex((p) => p === semester)
      return index !== -1 ? index : 0
    },
  })),
)
