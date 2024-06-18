'use client'

import { useEffect } from 'react'

import { useInactiveUserStore } from '@/store/inactive-user'

import { useInactivieUsers } from '../../_hooks/useInactivieUsers'
import { useUpgradeColumn } from '../../_hooks/useUpgradeColumn'
import { MemberTable } from '../ui/table/member-table'
import { SkeletonTable } from '../ui/table/skeleton-table'

export const UpgradeTable = () => {
  const { loadInactiveUsers } = useInactivieUsers()
  const { upgradeColumn } = useUpgradeColumn()
  const { inactiveUser, error } = useInactiveUserStore()

  useEffect(() => {
    loadInactiveUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (error) return <div>{error}</div>

  return (
    <div>
      {inactiveUser === undefined ? (
        <SkeletonTable />
      ) : (
        <MemberTable data={inactiveUser} columns={upgradeColumn} />
      )}
    </div>
  )
}
