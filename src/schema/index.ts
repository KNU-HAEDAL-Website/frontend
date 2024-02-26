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
