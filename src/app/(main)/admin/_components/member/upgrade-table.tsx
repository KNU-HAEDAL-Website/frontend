'use client'

import { useCallback, useEffect, useState } from 'react'

import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'

import { MemberTable } from '../member-table'
import { SkeletonTable } from './skeleton-table'
import { UpgradeForm } from './upgrade-form'
import { useUserFetch } from '@/services/fetchUsers'

export const UpgradeTable = () => {
  const [data, setData] = useState<undefined | UserInactive[]>(undefined)
  const [error, setError] = useState<undefined | string>(undefined)
  const { fetchInActiveUsers } = useUserFetch()

  const columns: ColumnDef<UserInactive>[] = [
    {
      header: '',
      id: 'id',
      cell: ({ row, table }) => (
        <div className="text-center">
          {table?.getSortedRowModel()?.flatRows?.indexOf(row) + 1}
        </div>
      ),
    },
    {
      accessorKey: 'userName',
      header: '이름',
      cell: ({ row }) => (
        <div className="text-center">{row.getValue('userName')}</div>
      ),
    },
    {
      accessorKey: 'studentNumber',
      header: '학번',
      cell: ({ row }) => (
        <div className="text-center">{row.getValue('studentNumber')}</div>
      ),
    },
    {
      accessorKey: 'regDate',
      header: '가입일',
      cell: ({ row }) => (
        <div className="text-center">
          {format(row.getValue('regDate'), 'yyyy.LL.dd')}
        </div>
      ),
    },
    {
      accessorKey: 'isAccepted',
      header: '',
      cell: ({ row }) => {
        return (
          <div className="flex justify-center">
            <UpgradeForm member={row.original} onSuccess={loadInActiveUsers} />
          </div>
        )
      },
    },
  ]

  const loadInActiveUsers = useCallback(async () => {
    const res = await fetchInActiveUsers()
  
    if (res?.users) {
      setData(res.users)
    }
    if (res?.error) {
      setError(res.error)
    }
  }, [fetchInActiveUsers])

  useEffect(() => {
    loadInActiveUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {!error && (
        <>
          {data === undefined && <SkeletonTable />}
          {data !== undefined && (
            <MemberTable data={data} columns={columns} />
          )}
        </>
      )}
      {error && <div>{error}</div>}
    </div>
  )
}
