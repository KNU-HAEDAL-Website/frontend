'use client'

import { useState } from 'react'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { ManageUserGrageDB } from '@/lib/data'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { TablePagination } from '../table-pagination'
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

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  })

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  })

  const pageNumList = Array.from(
    { length: table.getPageCount() },
    (_, i) => i + 1,
  )

  return (
    <div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination table={table} pageNumList={pageNumList} />
    </div>
  )
}
