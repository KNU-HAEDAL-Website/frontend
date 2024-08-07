import { BACKEND_API } from '@/service/config'
import { Semester } from '@/types/activity'

export const getSemesters = async () => {
  const response = await BACKEND_API.get<Semester[]>('/semesters')
  return response.data
}
