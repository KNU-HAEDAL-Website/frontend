import { X } from 'lucide-react'

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

import { DeleteDialogForm } from './delete-dialog-form'

interface DeleteDialogProps {
  semester: string
  semesterId: number
  onSuccess: () => void
}

export const DeleteDialog = ({
  semester,
  semesterId,
  onSuccess,
}: DeleteDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <X className="w-5 h-5 text-white" />
      </DialogTrigger>
      <DialogContent>
        <DeleteDialogForm
          semester={semester}
          semesterId={semesterId}
          onSuccess={onSuccess}
        />
      </DialogContent>
    </Dialog>
  )
}
