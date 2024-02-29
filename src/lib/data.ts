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

<<<<<<< HEAD
=======
//DB 연결 전 임시로 더미데이터 생성

>>>>>>> main
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

export const boardDB = [
  {
    id: 0,
    name: '웹 아장아장',
    intro: '일단 테스트용',
    image: '/imageDB/board-0.jpeg',
    user: '주보경',
  },
  {
    id: 1,
    name: '리액트스토리',
    intro: '아아 잘 들리시나요',
    image: '/imageDB/board-1.jpeg',
    user: '김강민',
  },
  {
    id: 2,
    name: '고래잡이배',
    intro: '도커 공부',
    image: '/imageDB/board-2.png',
    user: '권다운',
  },
  {
    id: 3,
    name: '리액트스토리',
    intro: '아아 잘 들리시나요',
    image: '/imageDB/board-1.jpeg',
    user: '김강민',
  },
  {
    id: 4,
    name: '고래잡이배',
    intro: '도커 공부',
    image: '/imageDB/board-2.png',
    user: '권다운',
  },
]
