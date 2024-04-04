import { create } from 'zustand'

import { userDB } from '@/lib/data'

interface GradeMemberPorps {
  selectedMember: UserWithGrade
  selectedGrade: string
  setSelectedMember: (studentId: number) => void
  setSelectedGrade: (grade: string) => void
}

export const useGradeMemberStore = create<GradeMemberPorps>()((set) => ({
  selectedMember: userDB[0],
  selectedGrade: '멤버',
  setSelectedMember: (studentId) =>
    set(() => {
      const findMember = userDB.find(
        (user) => user.studentId === studentId,
      )

      return { selectedMember: findMember }
    }),
  setSelectedGrade: (grade) =>
    set(() => {
      return { selectedGrade: grade }
    }),
}))
