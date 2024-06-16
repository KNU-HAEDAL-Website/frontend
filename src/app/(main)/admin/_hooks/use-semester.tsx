import { addSemesters, deleteSemester } from '@/services/adminSemesters'
import { useToast } from '@/components/ui/use-toast'

export const useSemester = () => {
  const { toast } = useToast()
  const token = localStorage.getItem('accessToken')

  const onClickAddSemester = async (semester: string) => {
    if (!token) {
      toast({ title: '허용되지 않는 요청입니다.' })
      return { success: false }
    }

    const data = await addSemesters(token, semester)
    if (data?.success) {
      toast({ title: data.message })
      return { success: true }
    } else {
      toast({ title: data.message })
      return { success: false }
    }
  }

  const onClickDeleteSemester = async (semester: Semester) => {
    if (!token) {
      toast({ title: '허용되지 않는 요청입니다.' })
      return { success: false }
    }

    const data = await deleteSemester(token, semester.semesterId)
    if (data?.success) {
      toast({ title: `${semester.semesterName} ${data.message}` })
      return { success: true }
    } else {
      toast({ title: data.message })
      return { success: false }
    }
  }

  return { onClickAddSemester, onClickDeleteSemester }
}
