'use client'

import { Table } from '@tanstack/react-table'

import { cn } from '@/lib/utils'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

// table type 다이나믹으로 변경하기
interface TablePaginationProps {
  pageNumList: number[]
  table: Table<ManageUserGrade>
}

export const TablePagination = ({
  pageNumList,
  table,
}: TablePaginationProps) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => table.previousPage()}
            aria-disabled={!table.getCanPreviousPage()}
            className={cn(
              !table.getCanPreviousPage()
                ? 'pointer-events-none opacity-50'
                : '',
            )}
          />
        </PaginationItem>
        {pageNumList.map((pageNum) => {
          const isActive = pageNum === table.getState().pagination.pageIndex + 1

          return (
            <PaginationItem key={pageNum}>
              <PaginationLink
                onClick={() => table.setPageIndex(pageNum - 1)}
                isActive={isActive}
              >
                {pageNum}
              </PaginationLink>
            </PaginationItem>
          )
        })}
        <PaginationItem>
          <PaginationNext
            onClick={() => table.nextPage()}
            aria-disabled={!table.getCanNextPage()}
            className={cn(
              !table.getCanNextPage() ? 'pointer-events-none opacity-50' : '',
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
