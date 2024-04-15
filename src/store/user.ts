import { create } from 'zustand'

interface UserIdProps {
  selectedUserId: string
  setSelectedUserId: (value: string) => void
}

export const useUserStore = create<UserIdProps>()((set) => ({
  selectedUserId: '',
  setSelectedUserId: (value) => set(() => ({ selectedUserId: value })),
}))
