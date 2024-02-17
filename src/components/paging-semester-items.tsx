'use client'

import { forwardRef } from 'react'

import { PaginationLink } from '@/components/ui/pagination'
import { useSemesterStore } from '@/store/semester'

export const PagingSemesterItems = forwardRef<
  HTMLAnchorElement,
  { period: string }
>(({ period }, ref) => {
  const { semester, setSemester } = useSemesterStore()
  const isActive = period === semester

  return (
    <PaginationLink
      ref={ref}
      onClick={() => setSemester(period)}
      isActive={isActive}
    >
      {period}
    </PaginationLink>
  )
})
