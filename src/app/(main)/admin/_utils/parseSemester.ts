export function parseSemester(semesters: Semester[]): Semester[] {
  const parsedSemesters = semesters.map((pre) => {
    const number = parseInt(pre.semesterName, 10)
    const year = Math.floor(number / 10)
    const term = (number % 10) as 1 | 2

    return {
      semesterId: pre.semesterId,
      semesterName: `${year} - ${term}`,
    }
  })
  return parsedSemesters
}
