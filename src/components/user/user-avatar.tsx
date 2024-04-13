import { HTMLAttributes, forwardRef } from 'react'

import { type VariantProps, cva } from 'class-variance-authority'
import { User2 } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const UserAvatarVariants = cva('', {
  variants: {
    size: {
      sm: 'h-9 w-9',
      lg: 'h-24 w-24',
    },
    icon: {
      sm: 'h-7 w-7',
      lg: 'h-16 w-16',
    },
  },
})

interface UserAvatarProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof UserAvatarVariants> {
  userImage?: string
}

const UserAvatar = forwardRef<HTMLDivElement, UserAvatarProps>(
  ({ className, size, userImage }) => {
    const icon = size
    return (
      <Avatar className={UserAvatarVariants({ size, className })}>
        <AvatarImage className={className} src={userImage} />
        <AvatarFallback className="text-primary">
          <User2 className={UserAvatarVariants({ icon })} />
        </AvatarFallback>
      </Avatar>
    )
  },
)
UserAvatar.displayName = 'UserAvatar'
export { UserAvatar }
