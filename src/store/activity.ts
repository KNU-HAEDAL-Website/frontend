import { activityDB } from '@/lib/data'
import { create } from 'zustand'

interface activityProps {
  selectedActivityList: string[]
  selectedActivity: string
  setSelectedActivityList: (semesterIndex: number) => void
  setSelectedActivity: (value: string) => void
}

export const useActivityStore = create<activityProps>()((set) => ({
  selectedActivityList: activityDB[1].name,
  selectedActivity: activityDB[1].name[0],
  setSelectedActivityList: (semesterIndex) =>
    set(() => ({ selectedActivityList: activityDB[semesterIndex].name })),
  setSelectedActivity: (value) => set(() => ({ selectedActivity: value })),
}))
