import { useAdminSemesterStore } from '@/store/admin-semester'
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
  semester: Semester
  onSuccess: () => void
}
export const SemesterDialog = ({
  semester,
  onSuccess,
}: SemesterDialogProps) => {
  const { setSelectedSemester } = useAdminSemesterStore()

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
        <SemesterDialogForm />
      </DialogContent>
    </Dialog>
  )
}
