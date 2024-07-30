import { create } from 'zustand'

interface SignupCheckProps {
  isValidUserId: boolean
  isValidStudentNumber: boolean
  setIsValidUserId: (value: boolean) => void
  setIsValidStudentNumber: (value: boolean) => void
}

export const useSignupCheckStore = create<SignupCheckProps>()((set) => ({
  isValidUserId: false,
  isValidStudentNumber: false,
  setIsValidUserId: (value) => set(() => ({ isValidUserId: value })),
  setIsValidStudentNumber: (value) =>
    set(() => ({ isValidStudentNumber: value })),
}))
