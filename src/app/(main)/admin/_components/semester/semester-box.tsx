import * as React from 'react'

import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export const SemesterBox = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex justify-center items-center rounded-3xl h-full px-3 text-sm font-regular transition-all bg-primary text-white hover:bg-primary/90 hover:cursor-grab',
        className,
      )}
      {...props}
    >
      <div className="w-14">{children}</div>
      <div className="w-5 h-5 flex items-center justify-center">
        <X className="w-4 h-4 transition-all hover:cursor-pointer hover:w-5 hover:h-5" />
      </div>
    </div>
  )
})

SemesterBox.displayName = 'FormItem'
