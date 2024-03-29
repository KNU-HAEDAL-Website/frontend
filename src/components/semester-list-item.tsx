'use client'

import { forwardRef } from 'react'

import { PaginationLink } from '@/components/ui/pagination'
import { useSemesterStore } from '@/store/semester'

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
      className="w-full cursor-pointer sm:w-auto"
    >
      {semesterItem}
    </PaginationLink>
  )
})

SemesterListItem.displayName = 'SemesterListItem'

export { SemesterListItem }
