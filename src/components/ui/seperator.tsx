import { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

interface SeperatorProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'vertical' | 'horizontal'
}

export const Seperator = ({
  orientation = 'horizontal',
  className,
  ...props
}: SeperatorProps) => {
  return (
    <hr
      className={cn(
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        'border-none bg-input',
        className,
      )}
      {...props}
    />
  )
}
