'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import LocalStorage from '@/constant/localStorage'

import { ProfileDropdownMenu } from './profile-dropdown-menu'
import { UserAvatar } from './user-avatar'

export const ProfileMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  useEffect(() => {
    const token = LocalStorage.getItem('accessToken')
    setIsLoggedIn(!!token)
  }, [])

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
