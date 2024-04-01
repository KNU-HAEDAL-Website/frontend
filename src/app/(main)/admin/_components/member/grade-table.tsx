'use client'

import { ColumnDef } from '@tanstack/react-table'

import { ManageUserGrageDB } from '@/lib/data'

import { MemberTable } from '../member-table'
import { GradeDialog } from './grade-dialog'

const columns: ColumnDef<ManageUserGrade>[] = [
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
    accessorKey: 'grade',
    header: '등급',
    cell: ({ row }) => {
      const member = row.original
      return (
        <div className="flex justify-center">
          <GradeDialog member={member} />
        </div>
      )
    },
  },
]

export const GradeTable = () => {
  // DB 연결 전 더미 데이터 사용
  const data: ManageUserGrade[] = ManageUserGrageDB

  return <MemberTable data={data} columns={columns} />
}
