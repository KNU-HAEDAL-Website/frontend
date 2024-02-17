import { years } from "@/lib/data"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { PagingYearsItems } from "./paging-years-item"

export const SelectYears = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="" />
        </PaginationItem>
        <PaginationItem>
          {years.map((year) => (
            <PagingYearsItems year={year} />
          ))}
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

