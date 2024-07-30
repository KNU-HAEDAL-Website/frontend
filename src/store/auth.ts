import { create } from 'zustand'

import LocalStorage from '@/lib/local-storage'

interface AuthProps {
  accessToken: string | null
  setAccessToken: (token: string) => void
  clearAccessToken: () => void
  isLoggedIn: () => boolean
}

export const useAuthStore = create<AuthProps>((set) => ({
  accessToken: LocalStorage.getItem('accessToken') || null,
  setAccessToken: (token) => {
    LocalStorage.setItem('accessToken', token)
    set({ accessToken: token })
  },
  clearAccessToken: () => {
    LocalStorage.removeItem('accessToken')
    set({ accessToken: null })
  },
  isLoggedIn: () => !!LocalStorage.getItem('accessToken'),
}))
