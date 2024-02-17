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
  const { semester, currentIndex, setCurrentIndex, setPreviousSemester, setNextSemester } = useSemesterStore()

  const getIndexList = (index: number, range: number) => {
    let start = Math.max(0, index - range)
    let end = Math.min(period.length - 1, index + range)

    if (currentIndex < range) {
      end = range * 2
    }
    if (currentIndex >= period.length - range) {
      start = (period.length - 1) - range * 2
    }
    
    return period.slice(start, end + 1)
  }

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
            <PagingSemesterItems key={p} period={p}/>
          ))}
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={setNextSemester} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
