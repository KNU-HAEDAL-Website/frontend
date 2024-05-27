'use client'

import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

import { checkIsAdmin } from '@/services/checkIsAdmin'

import { ItemSeperator } from './_components/item-seperator'
import { MemberManage } from './_components/member-manage'
import { SemesterManage } from './_components/semester-manage'
import { SliderManage } from './_components/slider-manage'

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    const checkAdmin = async () => {
      const res = await checkIsAdmin()
      if (res) {
        setIsAdmin(true)
      } else {
        router.push('/')
      }
    }

    checkAdmin()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
