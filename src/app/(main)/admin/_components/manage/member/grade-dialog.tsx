import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import { GradeDialogContent } from './grade-dialog-content'

interface GradeDialogProps {
  user: ManageUserGrade
}

export const GradeDialog = ({ user }: GradeDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="secondary" 
          size="sm" 
          className='hover:bg-border'
        >
          {user.grade}
        </Button>
      </DialogTrigger>
      <GradeDialogContent user={user} />
    </Dialog>
  )
}
