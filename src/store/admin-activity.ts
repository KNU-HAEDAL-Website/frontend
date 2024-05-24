import { create } from 'zustand'

interface activityProps {
  activities: string[]
  setActivities: (value: string[]) => void
  addActivity: (value: string) => void
  deleteActivity: (value: string) => void
}

export const useAdminActivityStore = create<activityProps>()((set) => ({
  activities: [],
  setActivities: (value) => set(() => ({ activities: [...value] })),
  addActivity: (value) =>
    set((pre) => ({ activities: [...pre.activities, value] })),
  deleteActivity: (value) =>
    set((pre) => {
      const deleteSelectedActivity = pre.activities.filter((cur) => cur !== value)
      return { activities: deleteSelectedActivity }
    }),
}))
