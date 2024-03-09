import { PageHeader } from '@/components/community/page-header'
import { BoardInfomation } from '@/components/createBoard/board-infomation'
import { BoardInput } from '@/components/createBoard/board-input'

const CreateBoardPage = () => {
  return (
    <div className="max-w-screen-xl xl:mx-auto">
      <PageHeader navName="Activity" pageName="게시판 생성하기" />
      <BoardInfomation />
      <BoardInput />
    </div>
  )
}

export default CreateBoardPage
