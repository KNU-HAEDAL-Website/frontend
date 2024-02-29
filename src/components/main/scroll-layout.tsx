'use client'

import { forwardRef } from 'react'

interface ScrollLayoutProps {
  children: React.ReactNode
}

const ScrollLayout = forwardRef<HTMLDivElement, ScrollLayoutProps>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className="h-full">
        {children}
      </div>
    )
  },
)
ScrollLayout.displayName = 'ScrollLayout'

export default ScrollLayout
