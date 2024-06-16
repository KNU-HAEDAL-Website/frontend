// import { useAdminActivityStore } from '@/store/admin-activity'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface ActivityItemsProps {
  activity: Activity
}

export const ActivityItems = ({ activity }: ActivityItemsProps) => {
  // const { deleteActivity } = useAdminActivityStore()

  const onClickDelte = () => {
    // deleteActivity(activity.activityName)
  }

  return (
    <div className="flex items-center bg-input px-4 py-1 rounded-full">
      {activity.activityName}
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
