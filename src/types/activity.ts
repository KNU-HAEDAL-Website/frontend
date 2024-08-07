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
