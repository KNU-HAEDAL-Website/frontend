import { create } from 'zustand'

interface RegisterCheckProps {
  successUserId: boolean
  successStudentNumber: boolean
  setSuccessUserId: (value: boolean) => void
  setSuccessStudentNumber: (value: boolean) => void
}

export const useRegisterCheckStore = create<RegisterCheckProps>()((set) => ({
  successUserId: false,
  successStudentNumber: false,
  setSuccessUserId: (value) => set(() => ({ successUserId: value })),
  setSuccessStudentNumber: (value) =>
    set(() => ({ successStudentNumber: value })),
}))
