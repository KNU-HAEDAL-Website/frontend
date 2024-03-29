import { CommentListItem } from "./comment-list-item"

interface commentListProps {
  data: CommentType[]
}

export const CommentList = ({ data }: commentListProps) => {
  return (
    <div className="flex flex-col gap-8 pt-10 pb-16">
      {data.map((comment) => (
        <div key={comment.id}>
          <CommentListItem item={comment}/>
        </div>
      ))}
    </div>
  )
}
