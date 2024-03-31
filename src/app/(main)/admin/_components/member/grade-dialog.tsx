import { useGradeMemberStore } from '@/store/grade-member'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog'

import { GradeDialogForm } from './grade-dialog-form'

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
        <GradeDialogForm />
      </DialogContent>
    </Dialog>
  )
}
