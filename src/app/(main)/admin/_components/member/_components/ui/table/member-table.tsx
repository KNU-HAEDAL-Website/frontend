'use client'

import { useState } from 'react'

import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { TableContent } from './table-content'
import { TableFilter } from './table-filter'
import { TablePagination } from './table-pagination'

interface MemberTableProps<T> {
  data: T[]
  columns: ColumnDef<T>[]
}

export function MemberTable<T>({ data, columns }: MemberTableProps<T>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  })

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,
    state: {
      pagination,
      columnFilters,
    },
  })

  const pageNumList = Array.from(
    { length: table.getPageCount() },
    (_, i) => i + 1,
  )

  return (
    <div>
      <TableFilter table={table} />
      <TableContent table={table} />
      <TablePagination table={table} pageNumList={pageNumList} />
    </div>
  )
}
