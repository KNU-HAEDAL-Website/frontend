import { PageHeader } from '@/components/community/page-header'
import { boardDB } from '@/lib/data'

const getData = (boardId: string) => {
  // const res = await fetch(`/api/boards/{boardId}/posts`)
  // return res.json()

  /** api 연결 전 더미데이터로 처리 */
  const board = boardDB.find((board) => board.id === Number(boardId))

  if (!board) {
    throw new Error(`${boardId} 게시판을 찾을 수 없습니다.`)
  }

  return board
}

const ActivityBoardPage = ({ params }: { params: { boardId: string } }) => {
  const board: Board = getData(params.boardId)

  return (
    <div className="max-w-screen-xl xl:mx-auto">
      <PageHeader
        navName="Activity"
        pageName={`${board.name} 게시판`}
        detail={board}
      />
    </div>
  )
}

export default ActivityBoardPage
