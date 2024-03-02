'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

interface paginationButtonProps {
  totalPageNum: number
  currentPage: number
  onPageChange: (page: number) => void
}

export const PaginationButton = ({
  totalPageNum,
  currentPage,
  onPageChange,
}: paginationButtonProps) => {
  const pageNumList = Array.from({ length: totalPageNum }, (_, i) => i + 1)

  const setPreviousPage = () => {
    const previousPage = currentPage > 1 ? currentPage - 1 : 1
    onPageChange(previousPage)
  }
  const setNextPage = () => {
    const nextPage = currentPage < totalPageNum ? currentPage + 1 : totalPageNum
    onPageChange(nextPage)
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => setPreviousPage()} />
        </PaginationItem>
        {pageNumList.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              onClick={() => onPageChange(page)}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext onClick={() => setNextPage()} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
