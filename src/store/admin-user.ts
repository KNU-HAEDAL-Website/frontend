import { create } from 'zustand'

interface AdminUserState {
    selectedUser: UserActive
    setSelectedUser: (value:UserActive) => void
}

export const useAdminUser = create<AdminUserState>()((set) => ({
    selectedUser: {
            userId: 'test',
            studentNumber: 2099999999,
            userName: 'test',
            role: '일반'
    },
    setSelectedUser: (value) => set(() => ({ selectedUser: value }))
}))
