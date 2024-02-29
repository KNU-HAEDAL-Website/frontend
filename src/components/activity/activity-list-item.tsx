'use client'

import { useActivityStore } from '@/store/activity'
import { ActiveButton } from '@/components/activity/active-button'

export const ActivityListItem = ({
  activityItems,
}: {
  activityItems: string
}) => {
  const { selectedActivity, setSelectedActivity } = useActivityStore()
  const isActive = activityItems === selectedActivity

  return (
    <ActiveButton
      onClick={() => setSelectedActivity(activityItems)}
      isActive={isActive}
      size="md"
      className="cursor-pointer"
    >
      {activityItems}
    </ActiveButton>
  )
}
