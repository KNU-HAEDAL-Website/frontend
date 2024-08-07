import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'

import { getSemesters } from '@/service/server/semester'

import { SemesterSection } from './_components/SemesterSection'

const ActivityPage = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['semesters'],
    queryFn: getSemesters,
  })

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SemesterSection />
      </HydrationBoundary>
    </div>
  )
}

export default ActivityPage
