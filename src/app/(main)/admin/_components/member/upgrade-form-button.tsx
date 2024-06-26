import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'

interface UpgradeButtonProps {
  onClick: () => void
  type: '수락' | '거절'
}

export const UpgradeFormButton = ({ onClick, type }: UpgradeButtonProps) => {
  return (
    <Button
      onClick={() => onClick()}
      className={cn(
        buttonVariants({
          variant: type === '수락' ? 'default' : 'secondary',
          size: 'ssm',
        }),
        'w-12',
      )}
    >
      {type}
    </Button>
  )
}
