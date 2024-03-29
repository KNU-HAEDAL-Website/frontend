import { useEffect, useState } from 'react'

import { Label } from '@/components/ui/label'
import { commentDB } from '@/lib/data'

import { CommentList } from './comment-list'
import { CommentInput } from './comment-input'

interface commentFormProps {
  postId: number
}

const getData = (postId: number) => {
  /** api 연결 전 더미데이터로 처리 */
  const comments =
    commentDB.filter((comment) => comment.postId == postId) || undefined
  return comments
}

export const CommentForm = ({ postId }: commentFormProps) => {
  const [comments, setComments] = useState(getData(postId))
  const [commentsNum, setCommentsNum] = useState(0)

  useEffect(() => {
    setComments(getData(postId))
  }, [postId])

  useEffect(() => {
    if (comments) {
      setCommentsNum(Object.values(comments).length)
    } else {
      setCommentsNum(0)
    }
  }, [comments])

  return (
    <div className="flex flex-col gap-2 py-16">
      <Label>{commentsNum}개의 댓글</Label>
      <CommentInput/>
      <div>
        <CommentList data={comments} />
      </div>
    </div>
  )
}
