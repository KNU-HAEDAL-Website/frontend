import { useInfiniteQuery } from '@tanstack/react-query'

import { getBoardsPaging } from '@/service/server/board'

type BoardsParams = {
  activityId: number
  size?: number
  initPageToken?: string
}

export const useGetBoardsPaging = ({
  activityId,
  size = 6,
  initPageToken,
}: BoardsParams) => {
  const { data, status, error, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['boards', activityId],
    queryFn: ({ pageParam = initPageToken }) =>
      getBoardsPaging({ activityId, page: pageParam, size }),
    initialPageParam: initPageToken,
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
  })

  const boards = data?.pages.flatMap((page) => page.boards)

  return { boards, status, error, fetchNextPage, hasNextPage }
}
