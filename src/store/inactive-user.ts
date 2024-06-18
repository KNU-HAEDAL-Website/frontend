import { create } from 'zustand'

interface InactivieUserState {
  inactiveUser: UserInactive[] | undefined
  error: string | undefined
  setInactiveUser: (value: UserInactive[]) => void
  setError: (value: string) => void
}

export const useInactiveUserStore = create<InactivieUserState>()((set) => ({
  inactiveUser: undefined,
  error: undefined,
  setInactiveUser: (value) => set(() => ({ inactiveUser: value })),
  setError: (value) => set(() => ({ error: value })),
}))
