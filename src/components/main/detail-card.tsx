import { CardHeader, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import React from 'react'

interface DetailCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  headerLabel: string
}

export const DetailCard = React.forwardRef<HTMLDivElement, DetailCardProps>(
  ({ className, children, headerLabel, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('h-full pt-10 px-8', className)} {...props}>
        <CardHeader className="text-lg md:text-xl">{headerLabel}</CardHeader>
        <CardContent>{children}</CardContent>
      </div>
    )
  },
)

DetailCard.displayName = 'DetailCard'
