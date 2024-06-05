'use client'

import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

import { LoadingDots } from '@/components/ui/loading-dots'
import { checkIsAdmin } from '@/services/checkIsAdmin'

import { ItemSeperator } from './_components/item-seperator'
import { MemberManage } from './_components/member-manage'
import { SemesterManage } from './_components/semester-manage'
import { SliderManage } from './_components/slider-manage'

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    const checkAdmin = async () => {
      setIsLoading(true)
      const res = await checkIsAdmin()
      if (res) {
        setIsAdmin(true)
      } else {
        router.replace('/')
      }
      setIsLoading(false)
    }

    checkAdmin()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading)
    return (
      <div className="flex w-full h-full items-center justify-center">
        <LoadingDots />
      </div>
    )

  if (!isAdmin) return null

  return (
    <div className="mx-10 py-12 md:mx-20">
      <MemberManage />
      <ItemSeperator />
      <SemesterManage />
      <ItemSeperator />
      <SliderManage />
    </div>
  )
}

export default AdminPage
