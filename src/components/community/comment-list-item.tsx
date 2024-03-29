import { format } from 'date-fns'

import { ProfileAvatar } from '@/components/profile-avatar'

interface commentListItemProps {
  item: CommentType
}

export const CommentListItem = ({ item }: commentListItemProps) => {
  return (
    <div key={item.id}>
      <div className="flex flex-row gap-3">
        <ProfileAvatar />
        <div className="flex flex-col pb-1">
          <div>{item.user}</div>
          <div className="text-xs">{format(item.createdAt, 'yyyy.LL.dd')}</div>
        </div>
      </div>
      <div className="px-1">{item.content}</div>
    </div>
  )
}
