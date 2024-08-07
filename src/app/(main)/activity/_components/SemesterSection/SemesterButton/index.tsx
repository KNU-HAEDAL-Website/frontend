import { PaginationLink } from '@/components/ui/pagination'

type SemesterButtonProps = {
  semester: string
}

export const SemesterButton = ({ semester }: SemesterButtonProps) => {
  return <PaginationLink href="#">{semester}</PaginationLink>
}
