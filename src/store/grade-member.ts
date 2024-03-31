import { create } from 'zustand'

import { ManageUserGrageDB } from '@/lib/data'

interface GradeMemberPorps {
  selectedMember: ManageUserGrade
  selectedGrade: string
  setSelectedMember: (studentId: number) => void
  setSelectedGrade: (grade: string) => void
}

export const useGradeMemberStore = create<GradeMemberPorps>()((set) => ({
  selectedMember: ManageUserGrageDB[0],
  selectedGrade: '멤버',
  setSelectedMember: (studentId) =>
    set(() => {
      const findMember = ManageUserGrageDB.find(
        (user) => user.studentId === studentId,
      )

      return { selectedMember: findMember }
    }),
  setSelectedGrade: (grade) =>
    set(() => {
      return { selectedGrade: grade }
    }),
}))
