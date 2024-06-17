import { useCallback, useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

import { checkIsAdmin } from '@/services/checkIsAdmin'

export const useAdminCheck = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const router = useRouter()

  const checkAdminStatus = useCallback(async () => {
    setIsLoading(true)
    try {
      const res = await checkIsAdmin()
      if (res) {
        setIsAdmin(true)
      } else {
        router.replace('/')
      }
    } catch (error) {
      console.error(error)
      router.replace('/')
    } finally {
      setIsLoading(false)
    }
  }, [router])

  useEffect(() => {
    checkAdminStatus()
  }, [checkAdminStatus])

  return { isAdmin, isLoading }
}
