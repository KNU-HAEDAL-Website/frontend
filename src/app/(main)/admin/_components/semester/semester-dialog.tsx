import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { SemesterDialogForm } from './semester-dialog-form'

export const SemesterDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full">{children}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{children} 활동 관리</DialogTitle>
        </DialogHeader>
        <SemesterDialogForm />
      </DialogContent>
    </Dialog>
  )
}
