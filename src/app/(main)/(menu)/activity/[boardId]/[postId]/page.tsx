'use client'

import { usePathname } from 'next/navigation'

import { boardDB, postDB } from '@/lib/data'
import { PostContent } from '@/components/community/post-content'
import { PostHeader } from '@/components/community/post-header'
import { PostPagination } from '@/components/community/post-pagination'
import { Separator } from '@/components/ui/separator'
import { CommentForm } from '@/components/community/comment-form'

const getData = (postId: string) => {
  /** api 연결 전 더미데이터로 처리 */
  const post = postDB.find((post) => post.id === Number(postId))

  if (!post) {
    throw new Error(`${postId} 게시글을 찾을 수 없습니다.`)
  }

  return post
}

const ActivityPostPage = ({ params }: { params: { postId: string } }) => {
  /** api 연결 전 더미데이터로 처리 */
  const post: Post = getData(params.postId)
  const boardId = usePathname().split('/')[2]
  const boardName =
    boardDB.find((board) => board.id === Number(boardId))?.name ||
    '게시판을 찾을 수 없습니다.'

  return (
    <div className="px-8 md:px-20 max-w-screen-xl xl:mx-auto">
      {/* activity 제외 고정 게시판 경우 추가하기 */}
      <PostHeader
        pageName={boardName}
        pageLink={`/activity/${boardId}`}
        detail={post}
      />
      <PostContent content={post.content} />
      <Separator className="my-8 w-full h-[1.5px] bg-primary/10" />
      <PostPagination postId={post.id} />
      <CommentForm postId={post.id}/>
    </div>
  )
}

export default ActivityPostPage
