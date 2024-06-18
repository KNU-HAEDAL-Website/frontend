import { forwardRef } from 'react'

import { useAdminUserStore } from '@/store/admin-user'
import { Button } from '@/components/ui/button'

interface DialogTriggerButtonProps {
  member: UserActive
}

const DialogTriggerButton = forwardRef<
  HTMLButtonElement,
  DialogTriggerButtonProps
>(({ member }, ref) => {
  const { setSelectedUser } = useAdminUserStore()

  return (
    <Button
      ref={ref}
      onClick={() => setSelectedUser(member)}
      variant="secondary"
      size="ssm"
    >
      {member.role}
    </Button>
  )
})
DialogTriggerButton.displayName = 'DialogTriggerButton'

export { DialogTriggerButton }
