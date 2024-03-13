import { PageHeader } from '@/components/community/page-header'
import { PostInput } from '@/components/community/post-input'
import { boardDB } from '@/lib/data'

const CreatePostPage = ({ params }: { params: { boardId: string } }) => {
  const board = boardDB.find((board) => board.id === Number(params.boardId))

  return (
    <div className="max-w-screen-xl xl:mx-auto">
      <PageHeader
        navName="Activity"
        pageName={`${board?.name} 게시판`}
        pageLink={`/activity/${board?.id}`}
      />
      <div className="py-6">
        <PostInput />
      </div>
    </div>
  )
}

export default CreatePostPage
