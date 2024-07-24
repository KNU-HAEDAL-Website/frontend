'use client'

import Link from 'next/link'

import { ProfileDropdownMenu } from './ProfileDropdownMenu'
import { UserAvatar } from './UserAvatar'

export const ProfileButton = () => {
  const isLoggedIn = true

  if (!isLoggedIn) {
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
