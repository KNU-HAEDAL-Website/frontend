'use client'

import Link from 'next/link'

import { useAuthStore } from '@/store/auth'

import { ProfileDropdownMenu } from './ProfileDropdownMenu'
import { UserAvatar } from './UserAvatar'

export const ProfileButton = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)

  if (!isLoggedIn()) {
    return (
      <Link href="/auth/login">
        <UserAvatar />
      </Link>
    )
  }

  return (
    <div className="flex">
      <ProfileDropdownMenu />
    </div>
  )
}
