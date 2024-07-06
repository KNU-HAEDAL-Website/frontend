import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'

import { UpgradeForm } from '../_components/upgrade_/form/upgrade-form'

export const useUpgradeColumn = () => {
  const upgradeColumn: ColumnDef<UserInactive>[] = [
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

  return { upgradeColumn }
}
