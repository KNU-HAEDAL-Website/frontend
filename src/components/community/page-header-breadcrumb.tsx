import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

interface pageHeaderBreadcrumbProps {
  navName: string
  pageName: string
  navLink: string
  pageLink?: string
}

export const PageHeaderBreadcrumb = ({
  navName,
  navLink,
  pageName,
  pageLink,
}: pageHeaderBreadcrumbProps) => {
  return (
    <Breadcrumb className="mb-5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={navLink}>{navName}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          {pageLink ? (
            <BreadcrumbLink href={pageLink} className="text-primary">
              {pageName}
            </BreadcrumbLink>
          ) : (
            <BreadcrumbPage>{pageName}</BreadcrumbPage>
          )}
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
