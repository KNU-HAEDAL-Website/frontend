'use client'

import { usePageStore } from "@/store/scroll-page"
import { forwardRef } from "react"

interface ScrollLayoutProps {
  children: React.ReactNode
  pageItem: string
}

const ScrollLayout = forwardRef<
  HTMLDivElement,
  ScrollLayoutProps
>(({ children, pageItem }, ref) => {
  const { selectedPage } = usePageStore()
  const isCurrentPage = pageItem == selectedPage

  return (
    <div 
      ref={ref}
      className="h-full"
      style={{ display: isCurrentPage ? 'block' : 'none'}}
    >
      {children}
    </div>
  )
})
ScrollLayout.displayName = 'ScrollLayout'

export default ScrollLayout
