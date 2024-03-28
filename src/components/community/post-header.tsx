import { Separator } from '@/components/ui/separator'

import { PostHeaderBreadCrumb } from './post-header-breadcrumb'
import { PostHeaderDetail } from './post-header-detail'

interface postHeaderProps {
  pageName: string
  pageLink: string
  detail: Post
}

export const PostHeader = ({ pageName, pageLink, detail }: postHeaderProps) => {
  return (
    <div>
      <Separator className="my-8 w-full h-[1.5px]" />
      <PostHeaderBreadCrumb pageName={pageName} pageLink={pageLink} />
      <Separator className="my-8 w-full h-[1.5px]" />
      <div>
        <PostHeaderDetail detail={detail} />
      </div>
      <Separator className="my-8 w-full h-[1.5px]" />
    </div>
  )
}
