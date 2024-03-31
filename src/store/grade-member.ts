import { create } from 'zustand'
import { ManageUserGrageDB } from '@/lib/data'

interface GradeMemberPorps {
  selectedMember: ManageUserGrade
  setSelectedMember: (studentId: number) => void
}

export const useGradeMemberStore = create<GradeMemberPorps>()((set) => ({
  selectedMember: ManageUserGrageDB[0],
  setSelectedMember: (studentId) =>
    set(() => {
      const findMember = ManageUserGrageDB.find(
        (user) => user.studentId === studentId,
      )

      return { selectedMember: findMember }
    }),
}))
