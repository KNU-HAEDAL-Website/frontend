'use client'

import { useAdminCheck } from './_hooks/use-admin-check'
import { AdminPageContent } from './_components/content'
import { Loading } from './_components/loading'

const AdminPage = () => {
  const { isLoading, isAdmin } = useAdminCheck()

  if (isLoading) return <Loading />

  if (!isAdmin) return null

  return <AdminPageContent />
}

export default AdminPage
