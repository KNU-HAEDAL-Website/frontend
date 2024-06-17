import { create } from 'zustand'

interface ActivieUserState {
    activeUser: UserActive[] | undefined
    error: string | undefined
    setActiveUser: (value:UserActive[]) => void
    setError: (value:string) => void
}

export const useActiveUserStore = create<ActivieUserState>()((set) => ({
    activeUser: undefined,
    error: undefined,
    setActiveUser: (value) => set(() => ({ activeUser: value })),
    setError: (value) => set(() => ({ error: value }))
}))
