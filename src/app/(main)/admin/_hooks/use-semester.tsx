import { useToast } from '@/components/ui/use-toast'
import { addSemesters } from '@/services/adminSemesters'

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

  return { onClickAddSemester }
}
