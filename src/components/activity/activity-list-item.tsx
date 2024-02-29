'use client'

import { ActiveButton } from '@/components/activity/active-button'
import { useActivityStore } from '@/store/activity'

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
