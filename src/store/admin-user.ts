import { create } from 'zustand'

interface AdminUserState {
  inactiveUsers: UserInactive[] | undefined
  activeUsers: UserActive[] | undefined
  error: string | undefined
  selectedUser: UserActive
  setInactiveUsers: (value: UserInactive[]) => void
  setActiveUsers: (value: UserActive[]) => void
  setError: (value: string) => void
  setSelectedUser: (value: UserActive) => void
}

export const useAdminUserStore = create<AdminUserState>()((set) => ({
  inactiveUsers: undefined,
  activeUsers: undefined,
  error: undefined,
  selectedUser: {
    userId: 'test',
    studentNumber: 2099999999,
    userName: 'test',
    role: '일반',
  },
  setInactiveUsers: (value) => set(() => ({ inactiveUsers: value })),
  setActiveUsers: (value) => set(() => ({ activeUsers: value })),
  setError: (value) => set(() => ({ error: value })),
  setSelectedUser: (value) => set(() => ({ selectedUser: value })),
}))
