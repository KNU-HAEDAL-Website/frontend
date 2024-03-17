'use client'

import { useActivityStore } from '@/store/activity'

import { ActiveButton } from './active-button'

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
