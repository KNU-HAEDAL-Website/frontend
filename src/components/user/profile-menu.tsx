'use client'

import Link from 'next/link'

import { useUserStore } from '@/store/user'
import { ProfileDropdownMenu } from './profile-dropdown-menu'
import { UserAvatar } from './user-avatar'

export const ProfileMenu = () => {
  const isLogin = useUserStore((value) =>value.isLoggedIn)

  return (
    <div className="flex">
      {isLogin ? (
        <ProfileDropdownMenu />
      ) : (
        <Link href="/auth/login">
          <UserAvatar />
        </Link>
      )}
    </div>
  )
}
