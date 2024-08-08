import { PaginationLink } from '@/components/ui/pagination'
import { cn } from '@/lib/utils'
import { Semester } from '@/types/activity'

import { useSemesterStore } from '~activity/_store/semester'

type SemesterButtonProps = {
  semester: Semester
}

export const SemesterButton = ({ semester }: SemesterButtonProps) => {
  const { currentSemester, setCurrentSemester } = useSemesterStore()
  const isActive = currentSemester?.semesterName === semester.semesterName

  return (
    <PaginationLink
      href="/activity"
      isActive={isActive}
      onClick={() => setCurrentSemester(semester)}
      className={cn(!isActive && 'text-primary/60')}
    >
      {semester.semesterName}
    </PaginationLink>
  )
}
