type Board = {
  id: number
  name: string
  intro?: string
  image?: string
  user?: string
}

// type BoardMember = Record<'name' | 'studentId', string | number>

type BoardMember = {
  name: string
  studentId: number
}

type User = {
  studentId: number
  name: string
  gradeId: number
}
