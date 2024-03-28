type Board = {
  id: number
  name: string
  intro?: string
  image?: string
  user?: string
  personnel?: BoardMember[]
}

// type BoardMember = Record<'name' | 'studentId', string | number>

type BoardMember = {
  name: string
  studentId: number
}

type User = {
  userId: number
  studentId: number
  name: string
  gradeId: number
}

type Post = {
  id: number
  title: string
  user: string
  activitedAt: Date
  createdAt: Date
  view: number
  content: string
}

type CommentType = {
  id: number
  content: string
  createdAt: Date
  user: string
  postId: number
  parentId?: number
}
