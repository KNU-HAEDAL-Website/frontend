import { create } from 'zustand'

interface AdminSemesterProps {
  semesters: Semester[]
  selectedSemester: Semester
  setSemesters: (semesters: Semester[]) => void
  setSelectedSemester: (semester: Semester) => void
}

export const useAdminSemesterStore = create<AdminSemesterProps>()((set) => ({
  semesters: [],
  selectedSemester: {
    semesterId: -1,
    semesterName: '',
  },
  setSemesters: (value) => set(() => ({ semesters: value })),
  setSelectedSemester: (value) => set(() => ({ selectedSemester: value })),
}))
