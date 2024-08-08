'use client'

import { useEffect } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import { useGetActivities } from '@/service/data/activity'

import { ActivityList } from './ActivityList'

type SelectActivityProps = {
  semesterId: number
}

export const SelectActivity = ({ semesterId }: SelectActivityProps) => {
  const router = useRouter()
  const pathName = usePathname()
  const { data: activities, status } = useGetActivities(semesterId)

  useEffect(() => {
    if (status === 'success' && activities?.length > 0) {
      if (pathName === '/activity') {
        const firstActivityId = activities[0].activityId
        router.push(`/activity/${firstActivityId}`)
      }
    }
  }, [status, activities, router, pathName])

  if (status === 'pending') return <div>loading...</div>
  if (!activities?.length) return <div>활동이 없습니다.</div>

  return <ActivityList activities={activities} />
}
