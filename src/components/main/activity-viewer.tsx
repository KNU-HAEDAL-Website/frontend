import React from 'react'

import { ActivityCard } from '@/components/main/activity-card'

export function ActivityViewer() {
  const activityTitles = ['트랙', '해커톤', '부트캠프', '아이디어톤']

  return (
    <div className="p-3 justify-center items-center gap-5 flex">
      {activityTitles.map((title, index) => (
        <ActivityCard key={index} title={title} />
      ))}
    </div>
  )
}
