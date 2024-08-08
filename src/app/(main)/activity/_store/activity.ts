import { create } from 'zustand'

import { Activity } from '@/types/activity'

interface ActivityProps {
  currentActivity?: Activity
  setCurrentActivity: (value?: Activity) => void
}

export const useActivityStore = create<ActivityProps>((set) => ({
  currentActivity: undefined,
  setCurrentActivity: (value) => set(() => ({ currentActivity: value })),
}))
