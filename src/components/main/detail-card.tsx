import React from 'react'

import { CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface DetailCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  headerLabel: string
}

export const DetailCard = React.forwardRef<HTMLDivElement, DetailCardProps>(
  ({ className, children, headerLabel, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('h-full px-8 pt-10', className)} {...props}>
        <CardHeader className="text-lg md:text-xl">{headerLabel}</CardHeader>
        <CardContent>{children}</CardContent>
      </div>
    )
  },
)

DetailCard.displayName = 'DetailCard'
