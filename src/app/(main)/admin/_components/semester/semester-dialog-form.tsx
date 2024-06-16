'use client'

import { useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { useActivitiesFetch } from '@/services/fetchActivities'
import { useAdminActivityStore } from '@/store/admin-activity'

import { ActivityItems } from './activity-items'
import { AddActivity } from './add-activity'

export const SemesterDialogForm = () => {
  const { activities, setActivities } = useAdminActivityStore()
  const { fetchActivities } = useActivitiesFetch()

  const loadActivities = async () => {
    const res = await fetchActivities()

    if (res?.activities) {
      setActivities(res.activities)
    }
    if (res?.error) {
      console.error(res.error)
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
        {activities?.map((activity, index) => (
          <ActivityItems activity={activity} key={index} />
        ))}
      </div>
      <Button onClick={onClick}>변경하기</Button>
    </div>
  )
}
