import Link from 'next/link'

import { Button } from '@/components/ui/button'

export const CreatePostButton = ({ boardId }: { boardId: number }) => {
  return (
    <Button variant="outline">
      <Link href={`/activity/${boardId}/createPost`}>게시글 생성하기</Link>
    </Button>
  )
}
