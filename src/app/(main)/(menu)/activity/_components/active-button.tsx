import { cn } from '@/lib/utils'
import { ButtonProps, buttonVariants } from '@/components/ui/button'

type ActiveButtonProps = {
  isActive?: boolean
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'div'>

const ActiveButton = ({
  className,
  isActive,
  size,
  ...props
}: ActiveButtonProps) => (
  <div
    className={cn(
      buttonVariants({
        variant: isActive ? 'default' : 'secondary',
        size,
      }),
      className,
    )}
    {...props}
  />
)
ActiveButton.displayName = 'ActiveButton'

export { ActiveButton }
