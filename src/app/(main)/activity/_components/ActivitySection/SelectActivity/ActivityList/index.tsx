import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ActiveButton } from '@/components/ActiveButton'
import { Activity } from '@/types/activity'

interface ActivityListProps {
  activities: Activity[]
}

export const ActivityList = ({ activities }: ActivityListProps) => {
  const pathname = usePathname()
  const activityId = pathname.match(/\d+$/)

  return (
    <div className="flex justify-center gap-2">
      {activities.map((activity) => (
        <Link
          key={activity.activityId}
          href={`/activity/${activity.activityId}`}
        >
          <ActiveButton
            isActive={Number(activityId) === activity.activityId}
            className="h-3 rounded-full p-4"
          >
            {activity.activityName}
          </ActiveButton>
        </Link>
      ))}
    </div>
  )
}
