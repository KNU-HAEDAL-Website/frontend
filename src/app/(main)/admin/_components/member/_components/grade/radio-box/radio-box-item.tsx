import { cn } from '@/lib/utils'
import { useAdminUserStore } from '@/store/admin-user'
import { Label } from '@/components/ui/label'
import { RadioGroupItem } from '@/components/ui/radio-group'

interface RadioBoxItemProps {
  roleName: string
}

export const RadioBoxItem = ({ roleName }: RadioBoxItemProps) => {
  const { selectedUser } = useAdminUserStore()
  const disabledRole = roleName === selectedUser.role

  return (
    <>
      <RadioGroupItem value={roleName} disabled={disabledRole} />
      <Label className={cn(disabledRole && 'text-primary/50')}>
        {roleName}
      </Label>
    </>
  )
}
