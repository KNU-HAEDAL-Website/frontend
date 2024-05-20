import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

import { GradeDialogForm } from './grade-dialog-form'

interface GradeDialogProps {
  member: UserActive
}

export const GradeDialog = ({ member }: GradeDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="ssm">
          {member.role}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <GradeDialogForm user={member} />
      </DialogContent>
    </Dialog>
  )
}
