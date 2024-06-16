import { create } from 'zustand'

interface activityProps {
  activities: Activity[]
  setActivities: (value: Activity[]) => void
}

export const useAdminActivityStore = create<activityProps>()((set) => ({
  activities: [],
  setActivities: (value) => set(() => ({ activities: value })),
}))
