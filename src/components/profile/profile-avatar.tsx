import { FaUser } from 'react-icons/fa'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const ProfileAvatar = () => {
  return (
    <Avatar>
      <AvatarImage />
      <AvatarFallback className="text-primary">
        <FaUser size="24" />
      </AvatarFallback>
    </Avatar>
  )
}
