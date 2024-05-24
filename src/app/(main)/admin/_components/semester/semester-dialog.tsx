import { activityDB } from '@/lib/data'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { SemesterDialogForm } from './semester-dialog-form'

interface SemesterDialogProps {
  semester: string
}
export const SemesterDialog = ({ semester }: SemesterDialogProps) => {
  //백엔드 연결 전 더미 데이터 사용
  const activity = activityDB.find((cur) => cur.semester === semester)?.name

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full">{semester}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{semester} 활동 관리</DialogTitle>
        </DialogHeader>
        <SemesterDialogForm defaultActivity={activity} />
      </DialogContent>
    </Dialog>
  )
}
