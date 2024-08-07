import { useQuery } from '@tanstack/react-query'

import { getActivities } from '@/service/server/activity'

export const useGetActivities = (semesterId: number) => {
  return useQuery({
    queryKey: ['activities', semesterId],
    queryFn: async () => getActivities({ semesterId }),
  })
}
