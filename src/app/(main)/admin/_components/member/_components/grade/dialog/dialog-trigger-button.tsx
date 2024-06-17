import { useAdminUser } from '@/store/admin-user'
import { Button } from '@/components/ui/button'

interface DialogTriggerButtonProps {
  member: UserActive
}

export const DialogTriggerButton = ({ member }: DialogTriggerButtonProps) => {
  const { setSelectedUser } = useAdminUser()

  return (
    <Button
      onClick={() => setSelectedUser(member)}
      variant="secondary"
      size="ssm"
    >
      {member.role}
    </Button>
  )
}
