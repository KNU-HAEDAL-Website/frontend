import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface GradeDialogContentProps {
  user: ManageUserGrade
}

export const GradeDialogContent = ({ user }: GradeDialogContentProps) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="flex gap-2 text-md">
          <span>
            {user.name}({user.studentId})
          </span>
          <span>권한 설정</span>
        </DialogTitle>
      </DialogHeader>
      <div>등급 선택 체크 박스</div>
    </DialogContent>
  )
}
