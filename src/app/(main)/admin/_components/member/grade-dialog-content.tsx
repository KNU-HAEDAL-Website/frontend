import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { GradeRadioBox } from './grade-radio-box'

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
      <GradeRadioBox user={user} />
    </DialogContent>
  )
}
