import { activityDB } from '@/lib/data'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { DeleteDialog } from './delete-dialog'
import { SemesterDialogForm } from './semester-dialog-form'

interface SemesterDialogProps {
  semester: string
  semesterId: number
  onSuccess: () => void
}
export const SemesterDialog = ({
  semester,
  semesterId,
  onSuccess,
}: SemesterDialogProps) => {
  //백엔드 연결 전 더미 데이터 사용
  const activity = activityDB.find((cur) => cur.semester === semester)?.name

  return (
    <Dialog>
      <Button className="rounded-full flex gap-2">
        <DialogTrigger asChild>
          <div>{semester}</div>
        </DialogTrigger>
        <DeleteDialog
          semester={semester}
          semesterId={semesterId}
          onSuccess={onSuccess}
        />
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{semester} 활동 관리</DialogTitle>
        </DialogHeader>
        <SemesterDialogForm defaultActivity={activity} />
      </DialogContent>
    </Dialog>
  )
}
