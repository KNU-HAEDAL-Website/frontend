'use client'

import { useState } from 'react'
import Link from 'next/link'

import { CaretSortIcon } from '@radix-ui/react-icons'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { cn } from '@/lib/utils'
import { CreatePostButton } from '@/components/community/create-post-button'
import { Button } from '@/components/ui/button'
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

const columns: ColumnDef<Post>[] = [
  {
    accessorKey: 'title',
    header: '제목',
    // 임의로 게시판 고정
    cell: ({ row }) => (
      <Link href={`/activity/0/${row.id}`}>{row.getValue('title')}</Link>
    ),
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
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="text-xs md:text-sm"
        >
          작성일
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const date: Date = row.getValue('createdAt')

      return <div className="text-center">{date.toDateString()}</div>
    },
  },
  {
    accessorKey: 'activitedAt',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="text-xs md:text-sm"
        >
          활동일
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const date: Date = row.getValue('activitedAt')

      return <div className="text-center">{date.toDateString()}</div>
    },
  },
  {
    accessorKey: 'view',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="text-xs md:text-sm"
        >
          조회수
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('view')}</div>
    ),
  },
]

interface postBoardProps {
  data: Post[]
  boardId: number
}

export const PostBoard = ({ data, boardId }: postBoardProps) => {
  const [sorting, setSorting] = useState<SortingState>([])
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
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    state: {
      columnFilters,
      pagination,
      sorting,
    },
  })

  const pageNumList = Array.from(
    { length: table.getPageCount() },
    (_, i) => i + 1,
  )

  return (
    <div className="py-10 px-8 md:px-20">
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
      <div className="pt-4 flex justify-end ">
        <CreatePostButton boardId={boardId} />
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
