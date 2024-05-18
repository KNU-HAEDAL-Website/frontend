import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

import { BanDialogForm } from './ban-dialog-form'

interface BanDialogProps {
  member: UserActive
}

export const BanDialog = ({ member }: BanDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" size="ssm">
          내보내기
        </Button>
      </DialogTrigger>
      <DialogContent>
        <BanDialogForm member={member} />
      </DialogContent>
    </Dialog>
  )
}
