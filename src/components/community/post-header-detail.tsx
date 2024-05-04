import { format } from 'date-fns'

import { UserAvatar } from '@/components/user/user-avatar'

export const PostHeaderDetail = ({ detail }: { detail: Post }) => {
  return (
    <div className="text-primary flex flex-col gap-1">
      <div className="text-xl pb-2 font-semibold">{detail.title}</div>
      <div className="flex gap-2 items-center">
        <UserAvatar />
        <div className="flex flex-col text-sm">
          <div>{detail.user}</div>
          <div className="flex gap-4">
            <span>{format(detail.createdAt, 'yyyy.LL.dd')}</span>
            <span>조회 {detail.view}</span>
            <span>댓글</span>
          </div>
        </div>
      </div>
    </div>
  )
}
