import { create } from 'zustand'

interface userProps {
  isLoggedIn: boolean
  setIsLoggedIn: (value: boolean) => void
}

export const useUserStore = create<userProps>()((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (value) => set(() => ({ isLoggedIn: value })),
}))
