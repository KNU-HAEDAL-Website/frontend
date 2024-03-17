import { forwardRef } from 'react'

import { cn } from '@/lib/utils'
import { CardContent, CardHeader } from '@/components/ui/card'

interface DetailCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  headerLabel: string
}

export const DetailCard = forwardRef<HTMLDivElement, DetailCardProps>(
  ({ className, children, headerLabel, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('h-full px-8 md:py-8 py-5', className)}
        {...props}
      >
        <CardHeader className="text-slate-900 text-base font-semibold font-['Inter'] uppercase leading-tight tracking-[3px]">
          {headerLabel}
        </CardHeader>
        <CardContent>{children}</CardContent>
      </div>
    )
  },
)

DetailCard.displayName = 'DetailCard'
