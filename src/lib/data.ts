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
    intro:
      'what ? 각자 공부한 것 자신의 페이지에 정리 or 인증하기 (본인의 노션에 적고 옮겨와도 됨!) 그냥 공부를 했구나 인증용으로만 미팅 인증 사진, 각자 모르는 것 질문 & 피드백',
    image: '/imageDB/board-0.jpeg',
    user: '주보경',
    personnel: [
      {
        name: '주보경',
        studentId: 2021123456,
      },
      {
        name: '김아진',
        studentId: 2021113989,
      },
      {
        name: '조대성',
        studentId: 2017110758,
      },
    ],
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
] satisfies Board[]

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
    userId: 0,
    studentId: 2021113989,
    name: '김아진',
    gradeId: 0,
  },
  {
    userId: 1,
    studentId: 2022110661,
    name: '권나예',
    gradeId: 0,
  },
  {
    userId: 2,
    studentId: 2021111604,
    name: '권다운',
    gradeId: 0,
  },
  {
    userId: 3,
    studentId: 2018115540,
    name: '김동환',
    gradeId: 0,
  },
  {
    userId: 4,
    studentId: 2020112393,
    name: '김은정',
    gradeId: 0,
  },
  {
    userId: 5,
    studentId: 2019115578,
    name: '윤재용',
    gradeId: 0,
  },
  {
    userId: 6,
    studentId: 2021123456,
    name: '주보경',
    gradeId: 1,
  },
  {
    userId: 7,
    studentId: 2018123456,
    name: '김강민',
    gradeId: 1,
  },
  {
    userId: 8,
    studentId: 2017110758,
    name: '조대성',
    gradeId: 0,
  },
] satisfies User[]

export const postDB = [
  {
    id: 0,
    title: '첫번째 게시물 테스트',
    user: '김아진',
    activitedAt: new Date('2024-03-10'),
    createdAt: new Date('2024-03-11'),
    view: 1230,
    content: '',
  },
  {
    id: 1,
    title: '두번째 게시물 테스트',
    user: '김아진',
    activitedAt: new Date('2024-03-11'),
    createdAt: new Date('2024-03-12'),
    view: 120,
    content:
      '[{"id":"60ef5176-a1c4-4624-84bb-ea25ad2fbdd0","type":"heading","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left","level":1},"content":[{"type":"text","text":"test","styles":{}}],"children":[]},{"id":"47f0765c-54fa-4d35-adf8-1d5c3add6296","type":"heading","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left","level":2},"content":[{"type":"text","text":"테스트","styles":{}}],"children":[]},{"id":"aad88019-e966-4e77-9b1a-b116cf45b82c","type":"numberedListItem","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[{"type":"text","text":"테스트","styles":{}}],"children":[]},{"id":"c7b97871-b597-412f-9f4c-8774835d24ec","type":"numberedListItem","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[{"type":"text","text":"ㅇㅇ","styles":{}}],"children":[]},{"id":"e8f3f708-9877-4dc5-862f-cf04e8e3527a","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[],"children":[]}]',
  },
  {
    id: 2,
    title: '세번째 게시물 테스트',
    user: '권나예',
    activitedAt: new Date('2024-03-11'),
    createdAt: new Date('2024-03-11'),
    view: 10,
    content: '',
  },
  {
    id: 3,
    title: '네번째 게시물 테스트',
    user: '권나예',
    activitedAt: new Date('2024-03-12'),
    createdAt: new Date('2024-03-12'),
    view: 12,
    content: '',
  },
  {
    id: 4,
    title: '다섯번째 게시물 테스트',
    user: '김은정',
    activitedAt: new Date('2024-03-13'),
    createdAt: new Date('2024-03-13'),
    view: 30,
    content: '',
  },
  {
    id: 6,
    title: '6번째 게시물 테스트',
    user: '김아진',
    activitedAt: new Date('2024-03-11'),
    createdAt: new Date('2024-03-12'),
    view: 120,
    content: '',
  },
  {
    id: 7,
    title: '7번째 게시물 테스트',
    user: '권나예',
    activitedAt: new Date('2024-03-11'),
    createdAt: new Date('2024-03-11'),
    view: 10,
    content: '',
  },
  {
    id: 8,
    title: '8번째 게시물 테스트',
    user: '권나예',
    activitedAt: new Date('2024-03-12'),
    createdAt: new Date('2024-03-12'),
    view: 12,
    content: '',
  },
  {
    id: 9,
    title: '9번째 게시물 테스트',
    user: '김은정',
    activitedAt: new Date('2024-03-13'),
    createdAt: new Date('2024-03-13'),
    view: 30,
    content: '',
  },
  {
    id: 10,
    title: '10번째 게시물 테스트',
    user: '권나예',
    activitedAt: new Date('2024-03-12'),
    createdAt: new Date('2024-03-12'),
    view: 12,
    content: '',
  },
  {
    id: 11,
    title: '11번째 게시물 테스트',
    user: '김은정',
    activitedAt: new Date('2024-03-13'),
    createdAt: new Date('2024-03-13'),
    view: 30,
    content: '',
  },
  {
    id: 12,
    title: '12번째 게시물 테스트',
    user: '김은정',
    activitedAt: new Date('2024-03-13'),
    createdAt: new Date('2024-03-13'),
    view: 30,
    content: '',
  },
] satisfies Post[]

export const commentDB = [
  {
    id: 0,
    content: '첫번째 댓글',
    createdAt: new Date('2024-03-28'),
    user: '김아진',
    postId: 0,
  },
  {
    id: 1,
    content: '2빠 ---',
    createdAt: new Date('2024-03-28'),
    user: '조대성',
    postId: 0,
  },
  {
    id: 3,
    content: '아아 잘 들리나요',
    createdAt: new Date('2024-03-28'),
    user: '김아진',
    postId: 0,
  },
  {
    id: 4,
    content: '댓글 테스트4',
    createdAt: new Date('2024-03-28'),
    user: '김아진',
    postId: 0,
  },
  {
    id: 5,
    content: '안녕하세요',
    createdAt: new Date('2024-03-28'),
    user: '조대성',
    postId: 1,
  },
  {
    id: 6,
    content: '좋아요 누르고 갑니다~',
    createdAt: new Date('2024-03-28'),
    user: '김아진',
    postId: 1,
  },
] satisfies CommentType[]

export const ManageUserGrageDB = [
  {
    userId: 0,
    studentId: 2021113989,
    name: '김아진',
    grade: '관리자',
  },
  {
    userId: 1,
    studentId: 2022110661,
    name: '권나예',
    grade: '해구르르',
  },
  {
    userId: 2,
    studentId: 2021111604,
    name: '권다운',
    grade: '팀장',
  },
  {
    userId: 3,
    studentId: 2018115540,
    name: '김동환',
    grade: '팀장',
  },
  {
    userId: 4,
    studentId: 2020112393,
    name: '김은정',
    grade: '멤버',
  },
  {
    userId: 5,
    studentId: 2019115578,
    name: '윤재용',
    grade: '팀장',
  },
  {
    userId: 6,
    studentId: 2021123456,
    name: '주보경',
    grade: '팀장',
  },
  {
    userId: 7,
    studentId: 2018123456,
    name: '김강민',
    grade: '팀장',
  },
  {
    userId: 8,
    studentId: 2017110758,
    name: '조대성',
    grade: '관리자',
  },
] satisfies ManageUserGrade[]
