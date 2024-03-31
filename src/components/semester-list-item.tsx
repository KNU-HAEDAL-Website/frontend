'use client'

import { forwardRef } from 'react'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useSemesterStore } from '@/store/semester'

const SemesterListItem = forwardRef<HTMLDivElement, { semesterItem: string }>(
  ({ semesterItem }, ref) => {
    const { selectedSemester, setSeletedSemester } = useSemesterStore()
    const isActive = semesterItem === selectedSemester

    return (
      <div
        ref={ref}
        onClick={() => setSeletedSemester(semesterItem)}
        className={cn(
          buttonVariants({
            variant: isActive ? 'link' : 'secondLink',
          }),
          'w-full cursor-pointer sm:w-auto',
        )}
      >
        {semesterItem}
      </div>
    )
  },
)

SemesterListItem.displayName = 'SemesterListItem'

export { SemesterListItem }
