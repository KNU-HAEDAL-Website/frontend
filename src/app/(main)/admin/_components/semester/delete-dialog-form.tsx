import { useAdminSemesterStore } from '@/store/admin-semester'
import { Button } from '@/components/ui/button'
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { useSemester } from '../../_hooks/use-semester'

interface DeleteDialogFormProps {
  onSuccess: () => void
}

export const DeleteDialogForm = ({ onSuccess }: DeleteDialogFormProps) => {
  const { selectedSemester } = useAdminSemesterStore()
  const { onClickDeleteSemester } = useSemester()

  const onClick = async () => {
    await onClickDeleteSemester(
      selectedSemester
    ).then((result) => {
      if (result.success) {
        onSuccess()
      }
    })
  }

  return (
    <div className="flex flex-col gap-6">
      <DialogHeader>
        <DialogTitle>
          정말 {selectedSemester.semesterName} 학기를 삭제하시겠어요?
        </DialogTitle>
        <DialogDescription>
          삭제하기 버튼 선택 시, 해당 학기의 모든 활동 정보는 삭제되며 복구되지
          않습니다.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <div className="flex gap-2">
            <Button variant="secondary">취소하기</Button>
            <Button variant="destructive" onClick={onClick}>
              삭제하기
            </Button>
          </div>
        </DialogClose>
      </DialogFooter>
    </div>
  )
}
