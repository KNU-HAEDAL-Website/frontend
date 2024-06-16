import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { X } from 'lucide-react'

import { DeleteDialogForm } from './delete-dialog-form'

interface DeleteDialogProps {
  onSuccess: () => void
}

export const DeleteDialog = ({ onSuccess }: DeleteDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <X className="w-5 h-5 text-white" />
      </DialogTrigger>
      <DialogContent>
        <DeleteDialogForm onSuccess={onSuccess} />
      </DialogContent>
    </Dialog>
  )
}
