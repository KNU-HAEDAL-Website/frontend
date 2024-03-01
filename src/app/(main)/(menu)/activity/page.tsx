import { ActivityList } from '@/components/activity/activity-list'
import { BoardList } from '@/components/board-list'
import { Separator } from '@/components/ui/separator'
import { boardDB } from '@/lib/data'

const getBoardListData = () => {
  //추가 fetch로 DB 불러오기

  return boardDB
}

const ActivityPage = () => {
  // DB 설계 후 수정
  const boardListData = getBoardListData()

  return (
    <div className="max-w-screen-xl xl:mx-auto">
      <ActivityList />
      <div className="mx-10 md:mx-20">
        <Separator className="my-8 w-full" />
      </div>
      <BoardList boardListData={boardListData} />
    </div>
  )
}

export default ActivityPage
