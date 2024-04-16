'use client'

import Link from 'next/link'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { UserAvatar } from './user-avatar'

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
          {/* 로그아웃 버튼 클릭시 로그아웃 api 호출 */}
          <button>로그아웃</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
