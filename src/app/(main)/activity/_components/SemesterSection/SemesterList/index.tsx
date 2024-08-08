import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { Semester } from '@/types/activity'

import { useSemesterStore } from '~activity/_store/semester'

import { SemesterButton } from './SemesterButton'

type SemesterListProps = {
  semesters: Semester[]
}

export const SemesterList = ({ semesters }: SemesterListProps) => {
  const { currentSemester, setCurrentSemester } = useSemesterStore()

  const onClickPreviousButton = () => {
    const index = currentSemester?.index ?? 0
    const previousIndex = index > 0 ? index - 1 : 0

    setCurrentSemester(semesters[previousIndex])
  }

  const onClickNextButton = () => {
    const index = currentSemester?.index ?? semesters.length - 1
    const nextIndex =
      index < semesters.length - 1 ? index + 1 : semesters.length - 1

    setCurrentSemester(semesters[nextIndex])
  }

  const visibleSemesters = getVisibleSemesterList(semesters, currentSemester)

  return (
    <Pagination className="pt-3">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="/activity"
            onClick={onClickPreviousButton}
            disabled={currentSemester?.index === 0}
          />
        </PaginationItem>
        <PaginationItem>
          {visibleSemesters?.map((semester) => (
            <SemesterButton key={semester.semesterId} semester={semester} />
          ))}
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="/activity"
            onClick={onClickNextButton}
            disabled={currentSemester?.index === semesters.length - 1}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

const getVisibleSemesterList = (
  semesters: Semester[],
  currentSemester?: Semester,
) => {
  const currentIndex = currentSemester?.index ?? semesters.length - 1

  const endIndex = Math.min(semesters.length - 1, currentIndex + 1)
  const startIndex = Math.max(0, endIndex - 2)

  return semesters.slice(startIndex, startIndex + 3)
}
