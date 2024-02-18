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
    selectedSemester,
    seletedIndex,
    setSelectedIndex,
    setPreviousSemester,
    setNextSemester,
    getIndexList,
  } = useSemesterStore()

  useEffect(() => {
    const index = useSemesterStore.getState().getSemesterIndex(selectedSemester)
    setSelectedIndex(index)
  }, [selectedSemester, setSelectedIndex])

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className='cursor-pointer'>
          <PaginationPrevious onClick={setPreviousSemester} />
        </PaginationItem>
        <PaginationItem>
          {getIndexList(seletedIndex, 1).map((p) => (
            <SemesterListItem key={p} semesterItem={p} />
          ))}
        </PaginationItem>
        <PaginationItem className='cursor-pointer'>
          <PaginationNext onClick={setNextSemester} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
