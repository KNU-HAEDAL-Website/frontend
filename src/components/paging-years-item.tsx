'use client'

import { usePathname } from 'next/navigation'
import { PaginationLink } from './ui/pagination'
import { cn } from '@/lib/utils'

export const PagingYearsItems = ({ year }: { year:string }) => {
  const pathname = usePathname()
  const isActive = pathname?.includes(year)

  return (
    <PaginationLink 
    href={`/activity/${year}`}
    isActive={isActive}
    className={cn(
        'text-third',
        isActive && 'text-secondary',
    )}
    >
        { year }
    </PaginationLink>
  )
}
