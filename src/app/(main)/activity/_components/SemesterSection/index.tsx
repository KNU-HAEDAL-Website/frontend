'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { useGetSemesters } from '@/service/data/semester'
import { Semester } from '@/types/activity'

import { SemesterButton } from './SemesterButton'

export const SemesterSection = () => {
  const { data, status, error } = useGetSemesters()

  if (status === 'pending') return <div>loading..</div>

  if (error) return <div>{error.message}</div>

  const semesters = convertSemesterFormat(data)

  return (
    <Pagination className="pt-3">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          {semesters?.map((semester) => (
            <SemesterButton
              key={semester.semesterId}
              semester={semester.semesterName}
            />
          ))}
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

const convertSemesterFormat = (semesters: Semester[]): Semester[] => {
  return semesters.map((semester) => {
    const year = semester.semesterName.slice(0, 4)
    const term = semester.semesterName.slice(4)

    return {
      semesterId: semester.semesterId,
      semesterName: `${year}-${term}`,
    }
  })
}
