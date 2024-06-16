import { useState } from 'react'

// import { useAdminActivityStore } from '@/store/admin-activity'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const AddActivity = () => {
  // const { addActivity } = useAdminActivityStore()
  const [activityName, setActivityName] = useState<string | undefined>('')
  const onClickAdd = () => {
    const activity = activityName?.trim()

    if (!activity) {
      setActivityName('')
      return
    }
    // 유효성 검사 추가하기
    // addActivity(activity)
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
