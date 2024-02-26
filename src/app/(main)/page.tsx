'use client'
import { useEffect } from 'react'

import { ScrollPageDB } from '@/lib/data'
import { usePageStore } from '@/store/scroll-page'
import ScrollLayout from '@/components/mainPage/scroll-layout'
import TitlePage from '@/components/mainPage/title-page'
import DetailPage from '@/components/mainPage/detail-page'
import ActivityPage from '@/components/mainPage/activity-page'
import SubmitPage from '@/components/mainPage/submit-page'

const scrollItemList = [
  { page: <TitlePage />, key: ScrollPageDB[0] },
  { page: <DetailPage />, key: ScrollPageDB[1] },
  { page: <ActivityPage />, key: ScrollPageDB[2] },
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
    <div className="h-full xl:mx-auto max-w-screen-xl">
      {scrollItemList.map((scrollItem) => (
        <ScrollLayout key={scrollItem.key}>{scrollItem.page}</ScrollLayout>
      ))}
    </div>
  )
}
