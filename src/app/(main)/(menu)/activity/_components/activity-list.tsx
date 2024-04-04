'use client'

import { useActivityStore } from '@/store/activity'

import { ActivityListItem } from './activity-list-item'

export const ActivityList = () => {
  const { selectedActivityList } = useActivityStore()

  return (
    <div className="flex justify-center gap-2">
      {selectedActivityList.map((activity, index) => (
        <div key={index}>
          <ActivityListItem activityItems={activity} />
        </div>
      ))}
    </div>
  )
}
