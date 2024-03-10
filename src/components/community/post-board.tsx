'use client'

import { useState } from 'react'

import { Input } from '@/components/ui/input'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { postlistDB } from '@/lib/data'
import { cn } from '@/lib/utils'
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
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
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const table = useReactTable({
    data,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination,
    state: {
      columnFilters,
      pagination,
    },
  })

  const pageNumList = Array.from(
    { length: table.getPageCount() },
    (_, i) => i + 1,
  )

  return (
    <div>
      <div className="rounded-md border">
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
      </div>
      <div className="py-2">
        <Input
          placeholder="작성자로 검색하기"
          value={(table.getColumn('user')?.getFilterValue() as string) ?? ''}
          onChange={(e) =>
            table.getColumn('user')?.setFilterValue(e.target.value)
          }
        />
      </div>
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => table.previousPage()}
                aria-disabled={!table.getCanPreviousPage()}
                className={cn(
                  !table.getCanPreviousPage()
                    ? 'pointer-events-none opacity-50'
                    : '',
                )}
              />
            </PaginationItem>
            {pageNumList.map((pageNum) => {
              const isActive =
                pageNum === table.getState().pagination.pageIndex + 1

              return (
                <PaginationItem key={pageNum}>
                  <PaginationLink
                    onClick={() => table.setPageIndex(pageNum - 1)}
                    isActive={isActive}
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              )
            })}
            <PaginationItem>
              <PaginationNext
                onClick={() => table.nextPage()}
                aria-disabled={!table.getCanNextPage()}
                className={cn(
                  !table.getCanNextPage()
                    ? 'pointer-events-none opacity-50'
                    : '',
                )}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
