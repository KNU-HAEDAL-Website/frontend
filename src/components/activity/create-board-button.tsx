import Link from 'next/link'

import { Button } from '@/components/ui/button'

export const CreateBoardButton = () => {
  return (
    <Button variant="outline">
      <Link href="/activity/createBoard">게시판 생성하기</Link>
    </Button>
  )
}
