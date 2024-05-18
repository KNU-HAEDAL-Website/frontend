'use client'

import { useCallback, useEffect, useState } from 'react'

import { ColumnDef } from '@tanstack/react-table'

import { useUserFetch } from '../../_hooks/fetch-user'
import { MemberTable } from '../member-table'
import { BanDialog } from './ban-dialog'
import { SkeletonTable } from './skeleton-table'

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
          <BanDialog member={row.original} />
        </div>
      )
    },
  },
]

export const BanTable = () => {
  const [data, setData] = useState<undefined | UserActive[]>()
  const [error, setError] = useState<undefined | string>()
  const { fetchActiveUsers } = useUserFetch()

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
          {data !== undefined && data?.length > 0 && (
            <MemberTable data={data} columns={columns} />
          )}
          {data !== undefined && data.length === 0 && (
            <div>회원 승인 요청이 없습니다.</div>
          )}
        </>
      )}
      {error && <div>{error}</div>}
    </div>
  )
}
