'use client'

import { period } from '@/lib/data'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { PagingSemesterItems } from '@/components/paging-semester-items'
import { useSemesterStore } from '@/store/semester'
import { useEffect } from 'react'

export const PagingSemester = () => {
  const { setPreviousSemester, setNextSemester } = useSemesterStore()

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={setPreviousSemester} />
        </PaginationItem>
        <PaginationItem>
          {period.map((p) => (
            <PagingSemesterItems key={p} period={p} />
          ))}
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={setNextSemester} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
