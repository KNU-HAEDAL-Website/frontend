import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { activityDB } from '@/lib/data'
import { useAdminSemesterStore } from '@/store/admin-semester'

import { DeleteDialog } from './delete-dialog'
import { SemesterDialogForm } from './semester-dialog-form'

interface SemesterDialogProps {
  semester: Semester
  onSuccess: () => void
}
export const SemesterDialog = ({
  semester,
  onSuccess,
}: SemesterDialogProps) => {
  const { setSelectedSemester } = useAdminSemesterStore()
  //백엔드 연결 전 더미 데이터 사용
  const activity = activityDB.find(
    (cur) => cur.semester === semester.semesterName,
  )?.name

  return (
    <Dialog>
      <Button
        onClick={() => setSelectedSemester(semester)}
        className="rounded-full flex gap-2"
      >
        <DialogTrigger asChild>
          <div>{semester.semesterName}</div>
        </DialogTrigger>
        <DeleteDialog onSuccess={onSuccess} />
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{semester.semesterName} 활동 관리</DialogTitle>
        </DialogHeader>
        <SemesterDialogForm defaultActivity={activity} />
      </DialogContent>
    </Dialog>
  )
}
