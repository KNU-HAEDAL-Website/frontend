import { useActivityStore } from '@/app/(main)/activity/_store/activity'

import { ActiveButton } from '@/components/ActiveButton'
import { Activity } from '@/types/activity'

type ActivityListProps = {
  activities: Activity[]
}

export const ActivityList = ({ activities }: ActivityListProps) => {
  const { currentActivity, setCurrentActivity } = useActivityStore()

  return (
    <div className="flex justify-center gap-2">
      {activities.map((activity) => (
        <ActiveButton
          key={activity.activityId}
          isActive={currentActivity === activity}
          onClick={() => setCurrentActivity(activity)}
          className="h-3 rounded-full p-4"
        >
          {activity.activityName}
        </ActiveButton>
      ))}
    </div>
  )
}
