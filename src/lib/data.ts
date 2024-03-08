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
  {
    id: 5,
    name: '웹 아장아장',
    intro: '일단 테스트용',
    image: '/imageDB/board-0.jpeg',
    user: '주보경',
  },
  {
    id: 6,
    name: '리액트스토리',
    intro: '아아 잘 들리시나요',
    image: '/imageDB/board-1.jpeg',
    user: '김강민',
  },
  {
    id: 7,
    name: '고래잡이배',
    intro: '도커 공부',
    image: '/imageDB/board-2.png',
    user: '권다운',
  },
  {
    id: 8,
    name: '리액트스토리',
    intro: '아아 잘 들리시나요',
    image: '/imageDB/board-1.jpeg',
    user: '김강민',
  },
  {
    id: 9,
    name: '고래잡이배',
    intro: '도커 공부',
    image: '/imageDB/board-2.png',
    user: '권다운',
  },
]

export const boardPaging = [
  [],
  [
    {
      id: 0,
      name: '1웹 아장아장',
      intro: '일단 테스트용',
      image: '/imageDB/board-0.jpeg',
      user: '주보경',
    },
    {
      id: 1,
      name: '2리액트스토리',
      intro: '아아 잘 들리시나요',
      image: '/imageDB/board-1.jpeg',
      user: '김강민',
    },
    {
      id: 2,
      name: '3고래잡이배',
      intro: '도커 공부',
      image: '/imageDB/board-2.png',
      user: '권다운',
    },
    {
      id: 3,
      name: '4리액트스토리',
      intro: '아아 잘 들리시나요',
      image: '/imageDB/board-1.jpeg',
      user: '김강민',
    },
    {
      id: 4,
      name: '5고래잡이배',
      intro: '도커 공부',
      image: '/imageDB/board-2.png',
      user: '권다운',
    },
  ],
  [
    {
      id: 5,
      name: '6웹 아장아장',
      intro: '일단 테스트용',
      image: '/imageDB/board-0.jpeg',
      user: '주보경',
    },
    {
      id: 6,
      name: '7리액트스토리',
      intro: '아아 잘 들리시나요',
      image: '/imageDB/board-1.jpeg',
      user: '김강민',
    },
    {
      id: 7,
      name: '8고래잡이배',
      intro: '도커 공부',
      image: '/imageDB/board-2.png',
      user: '권다운',
    },
    {
      id: 8,
      name: '9리액트스토리',
      intro: '아아 잘 들리시나요',
      image: '/imageDB/board-1.jpeg',
      user: '김강민',
    },
    {
      id: 9,
      name: '10고래잡이배',
      intro: '도커 공부',
      image: '/imageDB/board-2.png',
      user: '권다운',
    },
  ],
]

export const userDB = [
  {
    studentId: 2021113989,
    name: '김아진',
    gradeId: 0,
  },
  {
    studentId: 2022110661,
    name: '권나예',
    gradeId: 0,
  },
  {
    studentId: 2021111604,
    name: '권다운',
    gradeId: 0,
  },
  {
    studentId: 2018115540,
    name: '김동환',
    gradeId: 0,
  },
  {
    studentId: 2020112393,
    name: '김은정',
    gradeId: 0,
  },
  {
    studentId: 2019115578,
    name: '윤재용',
    gradeId: 0,
  },
  {
    studentId: 2021123456,
    name: '주보경',
    gradeId: 1,
  },
  {
    studentId: 2018123456,
    name: '김강민',
    gradeId: 1,
  },
] satisfies User[]
