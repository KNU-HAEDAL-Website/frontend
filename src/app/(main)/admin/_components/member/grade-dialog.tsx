import { useGradeMemberStore } from '@/store/grade-member'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { GradeRadioBox } from './grade-radio-box'

interface GradeDialogProps {
  member: ManageUserGrade
}

export const GradeDialog = ({ member }: GradeDialogProps) => {
  const { setSelectedMember } = useGradeMemberStore()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          size="ssm"
          onClick={() => setSelectedMember(member.studentId)}
          className="hover:bg-border"
        >
          {member.grade}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex gap-2 text-md">
            <span>
              {member.name}({member.studentId})
            </span>
            <span>권한 설정</span>
          </DialogTitle>
        </DialogHeader>
        <GradeRadioBox />
      </DialogContent>
    </Dialog>
  )
}
