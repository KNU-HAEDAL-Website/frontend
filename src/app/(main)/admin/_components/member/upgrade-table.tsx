'use client'

import { format } from 'date-fns'
import { ColumnDef } from '@tanstack/react-table'

import { UserUpgradeDB } from '@/lib/data'

import { MemberTable } from '../member-table'
import { UpgradeForm } from './upgrade-form'

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
    accessorKey: 'name',
    header: '이름',
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('name')}</div>
    ),
  },
  {
    accessorKey: 'studentId',
    header: '학번',
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('studentId')}</div>
    ),
  },
  {
    accessorKey: 'createdAt',
    header: '가입일',
    cell: ({ row }) => (
      <div className="text-center">
        {format(row.getValue('createdAt'), 'yyyy.LL.dd')}
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
  // DB 연결 전 더미 데이터 사용
  const data: UserUpgrade[] = UserUpgradeDB

  return <MemberTable data={data} columns={columns} />
}
