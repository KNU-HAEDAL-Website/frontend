import { create } from 'zustand'

interface UserIdProps {
  userId: string
  setUserId: (value: string) => void
}

export const useUserStore = create<UserIdProps>()((set) => ({
  userId: '',
  setUserId: (value) => set(() => ({ userId: value })),
})) 