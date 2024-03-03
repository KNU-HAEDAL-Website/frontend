'use client'

import { useEffect } from 'react'

import ActivityPage from '@/components/main/activity-page'
import DetailPage from '@/components/main/detail-page'
import ScrollLayout from '@/components/main/scroll-layout'
import SubmitPage from '@/components/main/submit-page'
import TitlePage from '@/components/main/title-page'
import { ScrollPageDB } from '@/lib/data'
import { usePageStore } from '@/store/scroll-page'

const scrollItemList = [
  { page: <TitlePage />, key: ScrollPageDB[0] },
  { page: <ActivityPage />, key: ScrollPageDB[1] },
  { page: <DetailPage />, key: ScrollPageDB[2] },
  { page: <SubmitPage />, key: ScrollPageDB[3] },
]

export default function Home() {
  const { selectedPageIndex, setSelectedPage } = usePageStore()

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY < 0 && selectedPageIndex > 0) {
        setSelectedPage(selectedPageIndex - 1)
      }
      if (e.deltaY > 0 && selectedPageIndex < 3) {
        setSelectedPage(selectedPageIndex + 1)
      }
    }

    window.addEventListener('wheel', handleWheel)
    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [selectedPageIndex, setSelectedPage])

  return (
    <div className="h-full max-w-screen-xl xl:mx-auto">
      {scrollItemList.map((scrollItem) => (
        <ScrollLayout key={scrollItem.key}>{scrollItem.page}</ScrollLayout>
      ))}
    </div>
  )
}
