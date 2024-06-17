'use client'

import { useCallback, useEffect, useState } from 'react'

import { ColumnDef } from '@tanstack/react-table'

import { useUserFetch } from '@/services/fetchUsers'

import { MemberTable } from '../ui/table/member-table'
import { BanDialog } from './ban-dialog'
import { SkeletonTable } from './skeleton-table'

export const BanTable = () => {
  const [data, setData] = useState<undefined | UserActive[]>()
  const [error, setError] = useState<undefined | string>()
  const { fetchActiveUsers } = useUserFetch()

  const columns: ColumnDef<UserActive>[] = [
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
      accessorKey: 'role',
      header: '등급',
      cell: ({ row }) => (
        <div className="text-center">{row.getValue('role')}</div>
      ),
    },
    {
      accessorKey: 'isBanned',
      header: '',
      cell: ({ row }) => {
        return (
          <div className="flex justify-center">
            <BanDialog member={row.original} onSuccess={loadActiveUsers} />
          </div>
        )
      },
    },
  ]

  const loadActiveUsers = useCallback(async () => {
    const res = await fetchActiveUsers()

    if (res?.users) {
      setData(res.users)
    }
    if (res?.error) {
      setError(res.error)
    }
  }, [fetchActiveUsers])

  useEffect(() => {
    loadActiveUsers()
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
