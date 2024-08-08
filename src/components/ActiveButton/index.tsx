import { Button, ButtonProps, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ActiveButtonProps extends ButtonProps {
  isActive: boolean
}

export const ActiveButton = ({
  isActive,
  className,
  ...props
}: ActiveButtonProps) => {
  return (
    <Button
      className={cn(
        buttonVariants({
          variant: isActive ? 'default' : 'secondary',
        }),
        className,
      )}
      {...props}
    />
  )
}
