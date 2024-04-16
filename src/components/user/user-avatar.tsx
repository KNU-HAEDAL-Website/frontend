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

interface UserAvatarProps extends VariantProps<typeof UserAvatarVariants> {
  userImage?: string
}

export const UserAvatar = ({ size = 'sm', userImage }: UserAvatarProps) => {
  const icon = size
  return (
    <Avatar className={UserAvatarVariants({ size })}>
      <AvatarImage src={userImage} />
      <AvatarFallback className="text-primary">
        <User2 className={UserAvatarVariants({ icon })} />
      </AvatarFallback>
    </Avatar>
  )
}
