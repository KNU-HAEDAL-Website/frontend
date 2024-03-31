'use client'

import { UserRoundSearch } from 'lucide-react'
import { Table } from '@tanstack/react-table'

import { Input } from '@/components/ui/input'

interface TableFilterProps {
  table: Table<ManageUserGrade>
}

export const TableFilter = ({ table }: TableFilterProps) => {
  return (
    <div className="flex items-center justify-end space-x-2 py-1">
      <UserRoundSearch className="w-4 h-4 text-muted-foreground" />
      <Input
        placeholder="이름으로 검색하기"
        value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
        onChange={(e) =>
          table.getColumn('name')?.setFilterValue(e.target.value)
        }
        className="w-40 h-7 bg-secondary/40 focus-visible:ring-transparent focus-visible:bg-secondary/70"
      />
    </div>
  )
}
