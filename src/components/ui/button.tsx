import * as React from 'react'

import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline underline-offset-4 font-semibold',
        secondLink: 'text-third underline-offset-4 hover:underline',
        /** Mainpage - 지원하기 button */
        apply: 'bg-amber-300 hover:bg-amber-400',
        /** createBoardPage 멤버 삭제 button */
        ring: 'ring-offset-background rounded-full outline-none',
      },
      size: {
        default: 'h-9 px-4 py-2',
        ssm: 'h-6 rounded-md w-16 text-xs',
        sm: 'h-8 rounded-md px-3 text-xs',
        md: 'h-8 rounded-md px-3',
        lg: 'h-10 rounded-md px-8',
        xl: 'h-8 rounded-md px-2 mx-1',
        icon: 'h-9 w-9',
        login: 'h-9',
        /** Mainpage - 지원하기 button */
        apply: 'h-14 px-12 py-4 rounded-none',
        /** createBoardPage 멤버 삭제 button */
        iconWithLabel: 'ml-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
