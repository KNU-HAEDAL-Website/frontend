import { ChevronRight } from 'lucide-react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '@/components/ui/breadcrumb'

interface postHeaderProps {
  pageName: string
  pageLink?: string
}

export const PostHeaderBreadCrumb = ({
  pageName,
  pageLink,
}: postHeaderProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href={pageLink}
            className="flex justify-center items-center mx-4 text-primary"
          >
            {pageName}
            <ChevronRight className="h-5 w-5" />
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
