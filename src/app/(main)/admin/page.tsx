'use client'

import { useEffect, useState } from 'react'

import { authorizationApi } from '@/constant/api'
import LocalStorage from '@/constant/localStorage'

import { ItemSeperator } from './_components/item-seperator'
import { MemberManage } from './_components/member-manage'
import { SemesterManage } from './_components/semester-manage'
import { SliderManage } from './_components/slider-manage'

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false)

  useEffect(() => {
    const checkAdmin = async () => {
      const token = LocalStorage.getItem('accessToken')
      if (!token) {
        return
      }

      try {
        await authorizationApi.get('/admin', {
          headers: { Authorization: token },
        })
        setIsAdmin(true)
      } catch (error) {
        console.error(error)
      }
    }

    checkAdmin()
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
