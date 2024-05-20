import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

import { GradeDialogForm } from './grade-dialog-form'

interface GradeDialogProps {
  member: UserActive
  onSuccess: () => void
}

export const GradeDialog = ({ member, onSuccess }: GradeDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="ssm">
          {member.role}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <GradeDialogForm user={member} onSuccess={onSuccess} />
      </DialogContent>
    </Dialog>
  )
}
