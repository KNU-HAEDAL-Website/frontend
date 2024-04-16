import { Button } from './ui/button'
import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'

interface DialogMessageProps {
  title?: string
  message?: string
}

export const DialogMessage = ({ title, message }: DialogMessageProps) => {
  if (!message) return null

  return (
    <div className="space-y-2">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>
      <div>{message}</div>
      <DialogFooter>
        <DialogClose asChild>
          <Button>닫기</Button>
        </DialogClose>
      </DialogFooter>
    </div>
  )
}
