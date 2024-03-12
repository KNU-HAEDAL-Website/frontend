import { PageHeader } from '@/components/community/page-header'
import { PostEditor } from '@/components/community/post-editor'
import { boardDB } from '@/lib/data'

const CreatePostPage = ({ params }: { params: { boardId: string } }) => {
  const board = boardDB.find((board) => board.id === Number(params.boardId))

  return (
    <div>
      <PageHeader
        navName="Activity"
        pageName={`${board?.name} 게시판`}
        pageLink={`/activity/${board?.id}`}
      />
      <PostEditor />
    </div>
  )
}

export default CreatePostPage
