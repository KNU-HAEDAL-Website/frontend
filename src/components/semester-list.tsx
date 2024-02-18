'use client'

import { useEffect } from 'react'

import { useSemesterStore } from '@/store/semester'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { SemesterListItem } from '@/components/semester-list-item'

export const SemesterList = () => {
  const {
    semester,
    currentIndex,
    setCurrentIndex,
    setPreviousSemester,
    setNextSemester,
    getIndexList,
  } = useSemesterStore()

  useEffect(() => {
    const index = useSemesterStore.getState().getSemesterIndex(semester)
    setCurrentIndex(index)
  }, [semester, setCurrentIndex])

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={setPreviousSemester} />
        </PaginationItem>
        <PaginationItem>
          {getIndexList(currentIndex, 1).map((p) => (
            <SemesterListItem key={p} period={p} />
          ))}
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={setNextSemester} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
