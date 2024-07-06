'use client'

import { useEffect } from 'react'

import { useAdminActivityStore } from '@/store/admin-activity'
import { useActivitiesFetch } from '@/services/fetchActivities'

import { ActivityItems } from './activity-items'
import { AddActivity } from './add-activity'

export const ActivityDialogForm = () => {
  const { activities, setActivities } = useAdminActivityStore()
  const { fetchActivities } = useActivitiesFetch()

  const loadActivities = async () => {
    const response = await fetchActivities()

    if (response?.activities) {
      setActivities(response.activities)
    }
    if (response?.error) {
      console.error(response.error)
    }
  }

  useEffect(() => {
    setActivities([])
    loadActivities()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <AddActivity onSuccess={loadActivities} />
      <div className="flex gap-2 flex-wrap">
        {activities?.map((activity) => (
          <ActivityItems
            onSuccess={loadActivities}
            activity={activity}
            key={activity.activityId}
          />
        ))}
      </div>
    </div>
  )
}
