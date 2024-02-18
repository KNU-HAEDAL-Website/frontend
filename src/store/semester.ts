import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { period } from '@/lib/data'

interface semesterProps {
  semester: string
  currentIndex: number
  setSemester: (value: string) => void
  setCurrentIndex: (index: number) => void
  setPreviousSemester: () => void
  setNextSemester: () => void
  getIndexList: (index: number, range: number) => string[]
  getSemesterIndex: (semester: string) => number
}

export const useSemesterStore = create<semesterProps>()(
  devtools((set) => ({
    semester: period[1],
    currentIndex: 1,
    setSemester: (value) => set(() => ({ semester: value })),
    setCurrentIndex: (index) => set(() => ({ currentIndex: index })),
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
    getIndexList: (index, range) => {
      let start = Math.max(0, index - range)
      let end = Math.min(period.length - 1, index + range)

      if (index < range) {
        end = range * 2
      }
      if (index >= period.length - range) {
        start = period.length - 1 - range * 2
      }

      return period.slice(start, end + 1)
    },
    getSemesterIndex: (semester) => {
      const index = period.findIndex((p) => p === semester)

      return index
    },
  })),
)
