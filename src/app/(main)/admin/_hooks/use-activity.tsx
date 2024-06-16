import { deleteActivity } from '@/services/adminActivities'
import { useToast } from '@/components/ui/use-toast'

export const useActivity = () => {
  const { toast } = useToast()
  const token = localStorage.getItem('accessToken')

  const onClickDeleteActivity = async (
    semester: Semester,
    activity: Activity,
  ) => {
    if (!token) {
      toast({ title: '허용되지 않는 요청입니다.' })
      return { success: false }
    }

    const data = await deleteActivity(
      token,
      semester.semesterId,
      activity.activityId,
    )
    if (data?.success) {
      toast({
        title: `${semester.semesterName}학기의 ${activity.activityName} ${data.message}`,
      })
      return { success: true }
    } else {
      toast({ title: data.message })
      return { success: false }
    }
  }

  return { onClickDeleteActivity }
}
