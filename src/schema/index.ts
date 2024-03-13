import * as z from 'zod'

export const RegisterSchema = z.object({
  name: z.string().min(2, {
    message: '이름은 최소 2글자 이상이어야 합니다.',
  }),
  studentId: z.string().regex(/^20[0-9]{8}$/, {
    message: '학번은 10글자이어야 합니다.',
  }),
  checked: z.literal<boolean>(true, {
    errorMap: () => ({
      message: '안내 문구를 확인해주세요.',
    }),
  }),
})

const BoardMemberShema = z.object({
  name: z.string(),
  studentId: z.number(),
}) satisfies z.ZodType<BoardMember>

export const BoardSchema = z.object({
  title: z.string().max(30, {
    message: '게시판 제목은 30자 이내이어야 합니다.',
  }),
  intro: z.string(),
  image: z.instanceof(File).refine((f) => f.size < 5000000, {
    message: '파일 크기는 5MB 이하만 가능합니다.',
  }),
  member: z.array(BoardMemberShema),
})

export const PostSchema = z.object({
  title: z.string(),
  activityDate: z.object({
    from: z.date(),
    to: z.date(),
  }),
  content: z.string(),
  image: z.instanceof(File).refine((f) => f.size < 5000000, {
    message: '파일 크기는 5MB 이하만 가능합니다.',
  }),
})
