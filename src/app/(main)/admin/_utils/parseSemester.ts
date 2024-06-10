export function parseSemester(semester: string): string {
  const number = parseInt(semester, 10)
  const year = Math.floor(number / 10)
  const term = (number % 10) as 1 | 2

  return `${year} - ${term}`
}
