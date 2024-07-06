import { Button } from '@/components/ui/button'
import { DialogClose, DialogFooter } from '@/components/ui/dialog'

export const GradeDialogFooter = () => {
  return (
    <DialogFooter>
      <DialogClose asChild>
        <Button type="submit" className="w-20 ">
          변경하기
        </Button>
      </DialogClose>
    </DialogFooter>
  )
}
