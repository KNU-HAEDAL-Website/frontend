'use client'

import { forwardRef } from 'react'

import { PaginationLink } from '@/components/ui/pagination'
import { useSemesterStore } from '@/store/semester'

interface periodProps {
    year: number
    num: number
}

export const PagingSemesterItems = forwardRef<HTMLAnchorElement, { period: periodProps }>(
  ({ period }, ref ) => {
    const { semester, setSemester } = useSemesterStore()
    const curSemester = `${period.year}-${period.num}`
    const isActive = curSemester === semester
    
    return (
      <PaginationLink 
          ref={ref}
          onClick={() => setSemester(curSemester)}
          isActive={isActive}
      >
          {curSemester}
      </PaginationLink>
    )
  }
)
