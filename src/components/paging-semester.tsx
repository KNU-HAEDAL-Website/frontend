'use client'

import { period } from "@/lib/data"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { PagingSemesterItems } from "@/components/paging-semester-items"

export const PagingSemester = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="" />
        </PaginationItem>
        <PaginationItem>
          {period.map((p) => (
            <PagingSemesterItems key={`${p.year}-${p.num}`} period={p}/>
          ))}
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}