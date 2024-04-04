import * as React from 'react'

import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export const ItemBox = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex justify-center items-center gap-2 rounded-3xl px-3 py-2 text-sm font-medium transition-all bg-primary text-white hover:bg-primary/90 hover:cursor-grab',
        className,
      )}
      {...props}
    >
      <div>{children}</div>
      <div className="w-5 h-5 flex items-center justify-center">
        <X className="w-4 h-4 transition-all hover:cursor-pointer hover:w-5 hover:h-5" />
      </div>
    </div>
  )
})

ItemBox.displayName = 'FormItem'
