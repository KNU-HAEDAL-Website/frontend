'use client'

import { useEffect } from 'react'

import { useActivitiesFetch } from '@/services/fetchActivities'
import { useAdminActivityStore } from '@/store/admin-activity'
import { Button } from '@/components/ui/button'

import { ActivityItems } from './activity-items'
import { AddActivity } from './add-activity'

export const SemesterDialogForm = () => {
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
    loadActivities()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onClick = () => {
    console.log(activities)
  }

  return (
    <div className="flex flex-col gap-4">
      <AddActivity />
      <div className="flex gap-2 flex-wrap">
        {activities?.map((activity) => (
          <ActivityItems
            onSuccess={loadActivities}
            activity={activity}
            key={activity.activityId}
          />
        ))}
      </div>
      <Button onClick={onClick}>변경하기</Button>
    </div>
  )
}
