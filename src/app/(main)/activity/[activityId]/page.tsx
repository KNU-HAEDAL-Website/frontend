import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { BoardSection } from './_components/BoardSection'

interface ActivityBoardPageParams {
  params: { activityId: string }
}

const ActivityBoardPage = ({ params }: ActivityBoardPageParams) => {
  return (
    <div className="flex w-screen flex-col px-12 sm:px-20 md:max-w-screen-lg">
      <BoardSection activityId={Number(params.activityId)} />
      <Link href="/activity/create-board" className="flex justify-end">
        <Button className="max-w-fit">게시판 생성하기</Button>
      </Link>
    </div>
  )
}

export default ActivityBoardPage
