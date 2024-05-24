'use client'

import { useEffect } from 'react'

import { useAdminActivityStore } from '@/store/admin-activity'
import { Button } from '@/components/ui/button'

import { ActivityItems } from './activity-items'
import { AddActivity } from './add-activity'

interface SemesterDialogFormProps {
  defaultActivity: string[] | undefined
}

export const SemesterDialogForm = ({
  defaultActivity,
}: SemesterDialogFormProps) => {
  const { activities, setActivities } = useAdminActivityStore()

  useEffect(() => {
    if (defaultActivity) {
      setActivities(defaultActivity)
    }
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
