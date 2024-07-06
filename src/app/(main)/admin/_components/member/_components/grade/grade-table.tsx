'use client'

import { useEffect } from 'react'

import { useAdminUserStore } from '@/store/admin-user'

import { useActivieUsers } from '../../_hooks/useActivieUsers'
import { useGradeColumn } from '../../_hooks/useGradeColumn'
import { MemberTable } from '../ui/table/member-table'
import { SkeletonTable } from '../ui/table/skeleton-table'

export const GradeTable = () => {
  const { loadActiveUsers } = useActivieUsers()
  const { gradeColumn } = useGradeColumn()
  const { activeUsers, error } = useAdminUserStore()

  useEffect(() => {
    loadActiveUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (error) return <div>{error}</div>

  return (
    <div>
      {activeUsers === undefined ? (
        <SkeletonTable />
      ) : (
        <MemberTable data={activeUsers} columns={gradeColumn} />
      )}
    </div>
  )
}
