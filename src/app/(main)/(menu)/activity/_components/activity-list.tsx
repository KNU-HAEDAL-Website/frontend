'use client'

import { useActivityStore } from '@/store/activity'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination'

import { ActivityListItem } from './activity-list-item'

export const ActivityList = () => {
  const { selectedActivityList } = useActivityStore()

  return (
    <Pagination>
      <PaginationContent className="gap-2">
        {selectedActivityList.map((activity, index) => (
          <PaginationItem key={index}>
            <ActivityListItem activityItems={activity} />
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  )
}
