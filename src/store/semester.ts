import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { semesterDB } from '@/lib/data'

interface semesterProps {
  selectedSemester: string
  seletedIndex: number
  setSeletedSemester: (value: string) => void
  setPreviousSemester: () => void
  setNextSemester: () => void
  setSelectedIndex: (index: number) => void
  getIndexList: (index: number, range: number) => string[]
  getSemesterIndex: (semester: string) => number
}

export const useSemesterStore = create<semesterProps>()(
  devtools((set) => ({
    selectedSemester: semesterDB[1],
    seletedIndex: 1,
    setSeletedSemester: (value) => set(() => ({ selectedSemester: value })),
    setSelectedIndex: (index) => set(() => ({ seletedIndex: index })),
    setPreviousSemester: () => {
      set((value) => {
        const index = value.getSemesterIndex(value.selectedSemester)
        const previousIndex = index > 0 ? index - 1 : 0

        return { selectedSemester: semesterDB[previousIndex] }
      })
    },
    setNextSemester: () => {
      set((value) => {
        const index = value.getSemesterIndex(value.selectedSemester)
        const n = semesterDB.length - 1
        const nextIndex = index < n ? index + 1 : n

        return { selectedSemester: semesterDB[nextIndex] }
      })
    },
    getIndexList: (index, range) => {
      let start = Math.max(0, index - range)
      let end = Math.min(semesterDB.length - 1, index + range)

      if (index < range) {
        end = range * 2
      }
      if (index >= semesterDB.length - range) {
        start = semesterDB.length - 1 - range * 2
      }

      return semesterDB.slice(start, end + 1)
    },
    getSemesterIndex: (semester) => {
      const index = semesterDB.findIndex((p) => p === semester)

      return index
    },
  })),
)
