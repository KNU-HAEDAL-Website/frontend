'use client'

import { useCallback, useEffect, useState } from 'react'

import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'

import { useUserActions } from '../../_hooks/upgradeUser'
import { MemberTable } from '../member-table'
import { SkeletonTable } from './skeleton-table'
import { UpgradeForm } from './upgrade-form'

export const UpgradeTable = () => {
  const [data, setData] = useState<undefined | UserUpgrade[]>(undefined)
  const [error, setError] = useState<undefined | string>(undefined)
  const { fetchInActiveUsers } = useUserActions()

  const columns: ColumnDef<UserUpgrade>[] = [
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
