type Board = {
  id: number
  name: string
  intro?: string
  image?: string
  user?: string
  personnel?: BoardMember[]
}

type User = {
  userId: string
  studentNumber: number
  userName: string
}

type UserActive = User & {
  role: '해구르르' | '팀장' | '일반'
}

type UserInactive = User & {
  regDate: Date
}

type Semester = {
  semesterId: number,
  semesterName: string
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
