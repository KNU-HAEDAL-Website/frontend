import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { navLinks } from '@/lib/data'

interface pageHeaderProps {
  navName: string
  pageName: string
}

export const PageHeader = ({ navName, pageName }: pageHeaderProps) => {
  const navLink = navLinks.find((nav) => nav.name == navName)?.href

  if (!navLink) {
    /** error page 만들기 */
    throw new Error(`${navName} 페이지를 찾을 수 없습니다.`)
  }

  return (
    <div className="px-8 md:px-20">
      <Separator className="mt-8 w-full h-[1.5px]" />
      <Breadcrumb className="my-5">
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
            <BreadcrumbPage>{pageName}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Separator className="w-full h-[1.5px]" />
    </div>
  )
}
