import { create } from 'zustand'

interface userProps {
  isLoggedIn: boolean
  profileImage: string | undefined
  setIsLoggedIn: (value: boolean) => void
  setProfileImage: (value: string) => void
}

export const useUserStore = create<userProps>()((set) => ({
  isLoggedIn: false,
  profileImage: undefined,
  setIsLoggedIn: (value) => set(() => ({ isLoggedIn: value })),
  setProfileImage: (value) => set(() => ({ profileImage: value })),
}))
