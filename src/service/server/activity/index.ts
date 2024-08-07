import { BACKEND_API } from '@/service/config'
import { Activity } from '@/types/activity'

type SemesterRequestParams = {
  semesterId: number
}

export const getActivities = async ({ semesterId }: SemesterRequestParams) => {
  const response = await BACKEND_API.get<Activity[]>(
    `/semesters/${semesterId}/activities`,
  )

  return response.data
}
