'use client'

import { forwardRef } from 'react'

import { useSemesterStore } from '@/store/semester'
import { PaginationLink } from '@/components/ui/pagination'

const SemesterListItem = forwardRef<
  HTMLAnchorElement,
  { semesterItem: string }
>(({ semesterItem }, ref) => {
  const { selectedSemester, setSeletedSemester } = useSemesterStore()
  const isActive = semesterItem === selectedSemester

  return (
    <PaginationLink
      ref={ref}
      onClick={() => setSeletedSemester(semesterItem)}
      isActive={isActive}
      className="cursor-pointer w-full sm:w-auto"
    >
      {semesterItem}
    </PaginationLink>
  )
})

SemesterListItem.displayName = 'SemesterListItem'

export { SemesterListItem }
