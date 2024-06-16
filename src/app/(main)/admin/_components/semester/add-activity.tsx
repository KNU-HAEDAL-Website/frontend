import { useState } from 'react'

import { useAdminSemesterStore } from '@/store/admin-semester'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { useActivity } from '../../_hooks/use-activity'

interface AddActivityProps {
  onSuccess: () => void
}

export const AddActivity = ({ onSuccess }: AddActivityProps) => {
  const { onClickAddActivity } = useActivity()
  const { selectedSemester } = useAdminSemesterStore()
  const [activityName, setActivityName] = useState<string | undefined>('')

  const onClickAdd = async () => {
    const activity = activityName?.trim()
    if (!activity) {
      setActivityName('')
      return
    }

    const response = await onClickAddActivity(selectedSemester, activity)
    if (response.success) {
      onSuccess()
    }
    setActivityName('')
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex gap-4">
      <Input
        value={activityName}
        onChange={(e) => setActivityName(e.target.value)}
      />
      <Button onClick={onClickAdd}>추가하기</Button>
    </form>
  )
}
