import { ActiveButton } from '@/components/ActiveButton'
import { Activity } from '@/types/activity'

type ActivityListProps = {
  activities: Activity[]
}

export const ActivityList = ({ activities }: ActivityListProps) => {
  return (
    <div className="flex justify-center gap-2">
      {activities.map((activity) => (
        <ActiveButton isActive={false} className="h-3 rounded-full p-4">
          {activity.activityName}
        </ActiveButton>
      ))}
    </div>
  )
}
