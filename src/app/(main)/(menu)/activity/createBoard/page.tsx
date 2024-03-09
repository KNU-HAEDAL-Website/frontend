'use client'
import { BoardInfomation } from '@/components/createBoard/board-infomation'
import { BoardInput } from '@/components/createBoard/board-input'

const CreateBoardPage = () => {

  return (
    <div className="max-w-screen-xl xl:mx-auto">
      <div className="py-6 bg-red-200">테스트용</div>
      <BoardInfomation />
      <BoardInput />
    </div>
  )
}

export default CreateBoardPage
