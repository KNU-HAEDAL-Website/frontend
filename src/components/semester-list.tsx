'use client'

import { useEffect } from 'react'

import { activityDB } from '@/lib/data'
import { useSemesterStore } from '@/store/semester'
import { useActivityStore } from '@/store/activity'
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

  const { setSelectedActivityList, setSelectedActivity } = useActivityStore()

  useEffect(() => {
    const index = useSemesterStore.getState().getSemesterIndex(selectedSemester)
    setSelectedIndex(index)
    // 학기 변경시 activity 초기화
    setSelectedActivity(activityDB[index].name[0])
    setSelectedActivityList(index)
  }, [
    selectedSemester,
    setSelectedIndex,
    setSelectedActivityList,
    setSelectedActivity,
  ])

  return (
    <Pagination className="py-2">
      <PaginationContent>
        <PaginationItem className="cursor-pointer">
          <PaginationPrevious onClick={setPreviousSemester} />
        </PaginationItem>
        <PaginationItem>
          {getIndexList(seletedIndex, 1).map((p) => (
            <SemesterListItem key={p} semesterItem={p} />
          ))}
        </PaginationItem>
        <PaginationItem className="cursor-pointer">
          <PaginationNext onClick={setNextSemester} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
