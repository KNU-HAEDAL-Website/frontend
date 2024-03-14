import { PageHeaderBreadcrumb } from '@/components/community/page-header-breadcrumb'
import { PageHeaderDetail } from '@/components/community/page-header-detail'
import { Separator } from '@/components/ui/separator'
import { navLinks } from '@/lib/data'

interface pageHeaderProps {
  navName: string
  pageName: string
  pageLink?: string
  detail?: Board
}

export const PageHeader = ({
  navName,
  pageName,
  pageLink,
  detail,
}: pageHeaderProps) => {
  const navLink = navLinks.find((nav) => nav.name == navName)?.href

  if (!navLink) {
    /** error page 만들기 */
    throw new Error(`${navName} 페이지를 찾을 수 없습니다.`)
  }

  return (
    <div className="px-8 md:px-20">
      <Separator className="mt-8 w-full h-[1.5px]" />
      <div className="my-5">
        <PageHeaderBreadcrumb
          navName={navName}
          navLink={navLink}
          pageName={pageName}
          pageLink={pageLink}
        />
        {!!detail && <PageHeaderDetail detail={detail} />}
      </div>
      <Separator className="w-full h-[1.5px]" />
    </div>
  )
}
