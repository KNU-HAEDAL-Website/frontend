import ScrollLayout from '@/components/mainPage/scroll-layout'
import TitlePage from '@/components/mainPage/title-page'
import DetailPage from '@/components/mainPage/detail-page'
import ActivityPage from '@/components/mainPage/activity-page'
import SubmitPage from '@/components/mainPage/submit-page'

const scrollItemList = [
  { page: <TitlePage />, key: 'titlePage' },
  { page: <DetailPage />, key: 'detailPage' },
  { page: <ActivityPage />, key: 'activityPage' },
  { page: <SubmitPage />, key: 'submitPage' },
]

export default function Home() {
  return (
    <div className="h-full xl:mx-auto max-w-screen-xl">
      {scrollItemList.map((scrollItem) => (
        <ScrollLayout key={scrollItem.key}>{scrollItem.page}</ScrollLayout>
      ))}
    </div>
  )
}
