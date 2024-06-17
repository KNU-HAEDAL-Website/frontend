'use client'

import { LoadingDots } from '@/components/ui/loading-dots'

import { ItemSeperator } from './_components/item-seperator'
import { MemberManage } from './_components/member-manage'
import { SemesterManage } from './_components/semester-manage'
import { SliderManage } from './_components/slider-manage'
import { useAdminCheck } from './_hooks/use-admin-check'

const AdminPage = () => {
  const { isLoading, isAdmin } = useAdminCheck()

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
