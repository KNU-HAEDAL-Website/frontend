import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface semesterProps {
    semester: string
    setSemester: (value:string) => void
}

export const useSemesterStore = create<semesterProps>()(
    devtools((set) => ({
        semester: '2023-2',
        setSemester: (value) => set(() => ({ semester: value })),
    }))
)