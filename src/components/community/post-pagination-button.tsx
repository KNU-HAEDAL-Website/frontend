import Link from 'next/link'

import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PostPaginationButtonProps {
  type: 'prev' | 'next'
  postInfo: Post
}

export const PostPaginationButton = ({
  type,
  postInfo,
}: PostPaginationButtonProps) => {
  return (
    <Link
      href={`/activity/0/${postInfo.id}`}
      className="flex w-fit py-3 px-6 rounded-lg items-center gap-4 text-primary/80 bg-secondary hover:text-primary hover:bg-secondary/70 hover:cursor-pointer"
    >
      {type === 'prev' && <ChevronLeft className="h-5 w-5" />}
      <div className="flex flex-col">
        <span className="text-sm">
          {type === 'prev' ? '이전 게시글' : '다음 게시글'}
        </span>
        <span>{postInfo.title}</span>
      </div>
      {type === 'next' && <ChevronRight className="h-5 w-5" />}
    </Link>
  )
}
