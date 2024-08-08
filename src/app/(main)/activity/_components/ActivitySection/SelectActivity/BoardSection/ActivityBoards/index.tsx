import { useGetBoardsPaging } from '@/service/data/boards'

import { BoardList } from './BoardList/indext'

type ActivityBoardsProps = {
  activityId: number
}

export const ActivityBoards = ({ activityId }: ActivityBoardsProps) => {
  const { boards, status } = useGetBoardsPaging({ activityId })

  if (status === 'pending') return <div>loading...</div>
  if (!boards?.length) return <div>게시판이 없습니다.</div>

  return <BoardList boards={boards} />
}
