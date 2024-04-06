import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { AddDialogForm } from './add-dialog-form'

export const AddDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-9 h-9 p-0 rounded-full">
          <Plus className="w-5 h-5 text-white" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>학기 추가</DialogTitle>
        </DialogHeader>
        <AddDialogForm />
      </DialogContent>
    </Dialog>
  )
}
