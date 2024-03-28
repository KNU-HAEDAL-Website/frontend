import { format } from "date-fns"
import { ProfileAvatar } from "@/components/profile-avatar"

interface commentListProps {
  data: CommentType[]
}

export const CommentList = ({ data }: commentListProps) => {
  return (
    <div className="flex flex-col gap-8 py-16">
      {data.map((comment) => (
        <div key={comment.id}>
          <div className="flex flex-row gap-3">
            <ProfileAvatar />
            <div className="flex flex-col pb-1">
              <div>{comment.user}</div>
              <div className="text-xs">{format(comment.createdAt, 'yyyy.LL.dd')}</div>
            </div>
          </div>
          <div className="px-1">
            {comment.content}
          </div>
        </div>
      ))}
    </div>
  )
}
