import { ColumnDef } from '@tanstack/react-table'

import { GradeDialog } from '../_components/grade/dialog/grade-dialog'

export const useGradeColumn = () => {
  const gradeColumn: ColumnDef<UserActive>[] = [
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
      accessorKey: 'role',
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

  return { gradeColumn }
}
