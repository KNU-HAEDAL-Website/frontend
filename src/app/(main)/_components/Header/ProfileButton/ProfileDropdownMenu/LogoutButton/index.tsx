'use client'

import { useRouter } from 'next/navigation'

import { useAuthStore } from '@/store/auth'

export const LogoutButton = () => {
  const router = useRouter()
  const clearAccessToken = useAuthStore((state) => state.clearAccessToken)

  const onClick = () => {
    clearAccessToken()
    router.refresh()
  }

  return <button onClick={onClick}>로그아웃</button>
}
