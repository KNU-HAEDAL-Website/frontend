import { Button } from '@/components/ui/button'
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
  
import { GradeRadioBox } from './grade-radio-box'

interface GradeDialogProps {
  user: ManageUserGrade
}

export const GradeDialog = ({ user }: GradeDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="ssm" className="hover:bg-border">
          {user.grade}
        </Button>
      </DialogTrigger>
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
    </Dialog>
  )
}
