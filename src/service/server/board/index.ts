import { BACKEND_API } from '@/service/config'
import { PagaingRaw, Paging } from '@/service/types/paging'
import { Board } from '@/types/activity'

type BoardsPagingRequestParams = {
  activityId: number
  page?: string
  size?: number
}

interface BoardsPagingResponseRaw extends PagaingRaw {
  content: Board[]
}

interface BoardsResponse extends Paging {
  boards: Board[]
}

export const getBoardsPaging = async (
  params: BoardsPagingRequestParams,
): Promise<BoardsResponse> => {
  const response = await BACKEND_API.get<BoardsPagingResponseRaw>(
    getBoardsPath(params),
  )

  const { data } = response

  return {
    boards: data.content,
    nextPageToken:
      data.pageable.pageNumber !== data.totalPages
        ? (data.pageable.pageNumber + 1).toString()
        : undefined,
    pageInfo: {
      totalPages: data.totalPages,
      totalElements: data.totalElements,
    },
  }
}

const getBoardsPath = ({
  activityId,
  page,
  size,
}: BoardsPagingRequestParams) => {
  const params = new URLSearchParams()

  if (page) params.append('page', page)
  if (size) params.append('size', size.toString())

  return `/activities/${activityId}/boards?${params.toString()}`
}
