export type Semester = {
  index?: number
  semesterId: number
  semesterName: string
}

export type Activity = {
  activityId: number
  activityName: string
  semesterId: number
}

type Participant = {
  participantId: number
  userId: string
  userName: string
}

export type Board = {
  boardId: number
  boardName: string
  boardIntro: string
  boardImageUrl: string
  participants: Participant[]
  activityId: number
}
