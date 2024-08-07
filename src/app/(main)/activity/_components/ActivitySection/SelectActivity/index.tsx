'use client'

import { useEffect } from 'react'

import { useGetActivities } from '@/service/data/activity'

import { useActivityStore } from '~activity/_store/activity'

import { ActivityList } from './ActivityList'
import { BoardSection } from './BoardSection'

type SelectActivityProps = {
  semesterId: number
}

export const SelectActivity = ({ semesterId }: SelectActivityProps) => {
  const { data: activities, status } = useGetActivities(semesterId)
  const setCurrentActivity = useActivityStore(
    (state) => state.setCurrentActivity,
  )

  useEffect(() => {
    if (status === 'success' && activities.length) {
      setCurrentActivity(activities[0])
    }
  }, [status, setCurrentActivity])

  if (status === 'pending') return <div>loading...</div>
  if (!activities?.length) return <div>활동이 없습니다.</div>

  return (
    <div className="flex flex-col gap-4 pb-40">
      <ActivityList activities={activities} />
      <BoardSection />
    </div>
  )
}
