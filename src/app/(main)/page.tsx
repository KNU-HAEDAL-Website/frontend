import ActivityPage from './_components/activity-page'
import DetailPage from './_components/detail-page'
import SubmitPage from './_components/submit-page'
import TitlePage from './_components/title-page'

export default function Home() {
  const mainItemList = [
    { page: <TitlePage />, index: 0 },
    { page: <DetailPage />, index: 1 },
    { page: <ActivityPage />, index: 2 },
    { page: <SubmitPage />, index: 3 },
  ]

  return (
    <div className="max-w-screen-xl xl:mx-auto">
      {mainItemList.map((item) => (
        <div key={item.index} className="h-screen">
          {item.page}
        </div>
      ))}
    </div>
  )
}
