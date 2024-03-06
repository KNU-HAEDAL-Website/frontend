import { ActivityList } from '@/components/activity/activity-list'
import { BoardList } from '@/components/activity/board-list'
import { SemesterList } from '@/components/semester-list'
import { Separator } from '@/components/ui/separator'

const ActivityPage = () => {
  return (
    <div className="max-w-screen-xl xl:mx-auto">
      <SemesterList />
      <ActivityList />
      <div className="mx-10 md:mx-20">
        <Separator className="my-8 w-full" />
      </div>
      <BoardList viewPage={5} />
    </div>
  )
}

export default ActivityPage
