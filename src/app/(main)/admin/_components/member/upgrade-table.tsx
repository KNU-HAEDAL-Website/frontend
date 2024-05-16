'use client'

import { useEffect, useState } from 'react'

import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'

import { MemberTable } from '../member-table'
import { UpgradeForm } from './upgrade-form'
import { SkeletonTable } from './skeleton-table'

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
          <UpgradeForm member={row.original} />
        </div>
      )
    },
  },
]

export const UpgradeTable = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/inactive`,
      )
      if (!response.ok) {
        throw new Error('서버에서 문제가 발생했습니다.')
      }
      const result = await response.json()
      setData(result)
    }

    fetchData().catch((e) => {
      console.log('데이터를 가져오는데에 실패했습니다.', e)
    })
  }, [])

  return (
    <div>
      {data ? <MemberTable data={data} columns={columns} /> : <SkeletonTable/>}
    </div>
  )
}
