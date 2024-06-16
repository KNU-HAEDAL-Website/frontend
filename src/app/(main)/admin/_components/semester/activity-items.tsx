import { X } from 'lucide-react'

import { useAdminSemesterStore } from '@/store/admin-semester'
import { Button } from '@/components/ui/button'

import { useActivity } from '../../_hooks/use-activity'

interface ActivityItemsProps {
  activity: Activity
  onSuccess: () => void
}

export const ActivityItems = ({ activity, onSuccess }: ActivityItemsProps) => {
  const { selectedSemester } = useAdminSemesterStore()
  const { onClickDeleteActivity } = useActivity()

  const onClick = async () => {
    const response = await onClickDeleteActivity(selectedSemester, activity)
    if (response.success) {
      onSuccess()
    }
  }

  return (
    <div className="flex items-center bg-input px-4 py-1 rounded-full">
      {activity.activityName}
      <Button
        onClick={onClick}
        variant="ring"
        className="rounded-full p-0 h-fit"
      >
        <X className="w-5 h-5 hover:text-primary/60" />
      </Button>
    </div>
  )
}
