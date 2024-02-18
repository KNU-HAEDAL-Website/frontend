import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ActiveButtonProps = {
  isActive?: boolean
} & React.ComponentProps<'div'>

const ActiveButton = ({ className, isActive, ...props }: ActiveButtonProps) => (
  <div
    className={cn(
      buttonVariants({
        variant: isActive ? 'default' : 'secondary',
      }),
      className,
    )}
    {...props}
  />
)
ActiveButton.displayName = 'ActiveButton'

export { ActiveButton }
