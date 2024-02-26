import { categoryDB } from '@/lib/data'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination'
import { CategoryListItem } from '@/components/activity/category-list-item'

export const CategoryList = () => {
  return (
    <Pagination>
      <PaginationContent className="gap-2">
        {categoryDB.map((categoryName) => (
          <PaginationItem key={categoryName}>
            <CategoryListItem categoryItem={categoryName} />
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  )
}
