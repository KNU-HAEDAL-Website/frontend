'use client'

import { useEffect } from 'react'

import { useAdminUserStore } from '@/store/admin-user'

import { useInactivieUsers } from '../../_hooks/useInactivieUsers'
import { useUpgradeColumn } from '../../_hooks/useUpgradeColumn'
import { MemberTable } from '../ui/table/member-table'
import { SkeletonTable } from '../ui/table/skeleton-table'

export const UpgradeTable = () => {
  const { loadInactiveUsers } = useInactivieUsers()
  const { upgradeColumn } = useUpgradeColumn()
  const { inactiveUsers, error } = useAdminUserStore()

  useEffect(() => {
    loadInactiveUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (error) return <div>{error}</div>

  return (
    <div>
      {inactiveUsers === undefined ? (
        <SkeletonTable />
      ) : (
        <MemberTable data={inactiveUsers} columns={upgradeColumn} />
      )}
    </div>
  )
}
