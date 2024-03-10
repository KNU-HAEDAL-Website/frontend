'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { postlistDB } from '@/lib/data'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

const data = postlistDB
const columns: ColumnDef<Post>[] = [
  {
    accessorKey: 'title',
    header: '제목',
    cell: ({ row }) => <div>{row.getValue('title')}</div>,
  },
  {
    accessorKey: 'user',
    header: '작성자',
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('user')}</div>
    ),
  },
  {
    accessorKey: 'createdAt',
    header: '작성일',
    cell: ({ row }) => {
      const date: Date = row.getValue('createdAt')

      return <div className="text-center">{date.toDateString()}</div>
    },
  },
  {
    accessorKey: 'activitedAt',
    header: '활동일',
    cell: ({ row }) => {
      const date: Date = row.getValue('activitedAt')

      return <div className="text-center">{date.toDateString()}</div>
    },
  },
  {
    accessorKey: 'view',
    header: '조회수',
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('view')}</div>
    ),
  },
]

export const PostBoard = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
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
  )
}
