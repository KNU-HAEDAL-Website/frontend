import { cn } from '@/lib/utils'
import { postDB } from '@/lib/data'

import { PostPaginationButton } from './post-pagination-button'

interface PostPaginationProps {
  postId: number
}
export const PostPagination = ({ postId }: PostPaginationProps) => {
  const prevPost = postDB.find((post) => post.id === postId - 1) || undefined
  const nextPost = postDB.find((post) => post.id === postId + 1) || undefined

  return (
    <div className={cn('flex justify-between', !prevPost && 'justify-end')}>
      {prevPost && <PostPaginationButton type="prev" postInfo={prevPost} />}
      {nextPost && <PostPaginationButton type="next" postInfo={nextPost} />}
    </div>
  )
}
