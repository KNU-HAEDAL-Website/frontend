import { useQuery } from '@tanstack/react-query'

import { getSemesters } from '@/service/server/semester'

export const useGetSemesters = () => {
  return useQuery({
    queryKey: ['semesters'],
    queryFn: async () => getSemesters(),
  })
}
