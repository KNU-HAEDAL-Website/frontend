import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination'
import { CategoryItem } from '@/components/category-item'

export const Category = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <CategoryItem item="부트캠프" />
        </PaginationItem>
        <PaginationItem>
          <CategoryItem item="트랙" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
