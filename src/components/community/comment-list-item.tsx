import { format } from 'date-fns'
import { Pencil, Trash2 } from 'lucide-react'

import { UserAvatar } from '@/components/user/user-avatar'

interface commentListItemProps {
  item: CommentType
}

export const CommentListItem = ({ item }: commentListItemProps) => {
  return (
    <div key={item.id}>
      <div className="flex justify-between">
        <div className="flex flex-row gap-3">
          <UserAvatar />
          <div className="flex flex-col pb-1">
            <div>{item.user}</div>
            <div className="text-xs">
              {format(item.createdAt, 'yyyy.LL.dd')}
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2 text-primary/70">
          <Pencil className="h-4 w-4 hover:text-primary hover:cursor-pointer" />
          <Trash2 className="h-4 w-4 hover:text-primary hover:cursor-pointer" />
        </div>
      </div>
      <div className="px-1">{item.content}</div>
      <div className="px-1 py-2 font-normal text-sm text-primary/70 underline-offset-4 hover:text-primary hover:underline hover:cursor-pointer">
        답글 달기
      </div>
    </div>
  )
}
