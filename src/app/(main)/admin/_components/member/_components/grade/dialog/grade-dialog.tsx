import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

import { GradeDialogForm } from './dialog-form'
import { DialogTriggerButton } from './dialog-trigger-button'

interface GradeDialogProps {
  member: UserActive
}

export const GradeDialog = ({ member }: GradeDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DialogTriggerButton member={member} />
      </DialogTrigger>
      <DialogContent>
        <GradeDialogForm />
      </DialogContent>
    </Dialog>
  )
}
