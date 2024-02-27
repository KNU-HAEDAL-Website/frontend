export const navLinks = [
  {
    name: 'Activity',
    href: '/activity',
  },
  {
    name: 'Gallery',
    href: '/gallery',
  },
  {
    name: 'Member',
    href: '/member',
  },
  {
    name: 'Notice',
    href: '/notice',
  },
] as const

//DB 연결 전 임시로 더미데이터 생성

export const ScrollPageDB = ['title', 'detail', 'activity', 'submit']

export const semesterDB = ['2023-1', '2023-2', '2024-1', '2024-2']

export const activityDB = [
  {
    semester: semesterDB[0],
    name: ['부트캠프', '트랙', '소모임'],
  },
  {
    semester: semesterDB[1],
    name: ['부트캠프', '트랙', '소모임'],
  },
  {
    semester: semesterDB[2],
    name: ['부트캠프', '트랙', '소모임', '프로젝트'],
  },
  {
    semester: semesterDB[3],
    name: ['부트캠프', '트랙'],
  },
]
