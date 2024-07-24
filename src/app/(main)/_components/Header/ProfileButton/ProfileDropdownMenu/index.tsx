'use client'

import Link from 'next/link'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { UserAvatar } from '../UserAvatar'
import { LogoutButton } from './LogoutButton'

export const ProfileDropdownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar />
        {/* <UserAvatar userImage={userImageUrl} /> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-4">
        <DropdownMenuItem asChild>
          <Link href="/mypage">마이페이지</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
