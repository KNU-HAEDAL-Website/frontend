import { X } from 'lucide-react'

import { useAdminActivityStore } from '@/store/admin-activity'
import { Button } from '@/components/ui/button'

interface ActivityItemsProps {
  activity: string
}

export const ActivityItems = ({ activity }: ActivityItemsProps) => {
  const { deleteActivity } = useAdminActivityStore()

  const onClickDelte = () => {
    deleteActivity(activity)
  }

  return (
    <div className="flex items-center bg-input px-4 py-1 rounded-full">
      {activity}
      <Button
        onClick={onClickDelte}
        variant="ring"
        className="rounded-full p-0 h-fit"
      >
        <X className="w-5 h-5 hover:text-primary/60" />
      </Button>
    </div>
  )
}
