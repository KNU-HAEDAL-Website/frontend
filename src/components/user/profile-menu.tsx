'use client'

import Link from 'next/link'

import { ProfileDropdownMenu } from './profile-dropdown-menu'
import { UserAvatar } from './user-avatar'

export const ProfileMenu = () => {
  // 로그인 상태 확인 api 호출
  const isLogin = true

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
