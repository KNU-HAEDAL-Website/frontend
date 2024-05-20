import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

import { BanDialogForm } from './ban-dialog-form'

interface BanDialogProps {
  member: UserActive
  onSuccess: () => void
}

export const BanDialog = ({ member, onSuccess }: BanDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" size="ssm">
          내보내기
        </Button>
      </DialogTrigger>
      <DialogContent>
        <BanDialogForm member={member} onSuccess={onSuccess} />
      </DialogContent>
    </Dialog>
  )
}
