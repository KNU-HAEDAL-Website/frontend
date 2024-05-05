type Board = {
  id: number
  name: string
  intro?: string
  image?: string
  user?: string
  personnel?: BoardMember[]
}

type User = {
  userId: number
  studentId: number
  name: string
}

type UserWithGrade = User & {
  grade: '해구르르' | '팀장' | '멤버'
}

type UserUpgrade = User & {
  createdAt: Date
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

type CheckResponse = {
  success: boolean
  message: string | undefined
}
