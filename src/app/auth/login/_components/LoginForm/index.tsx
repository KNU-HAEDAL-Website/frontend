import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const LoginForm = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="id">아이디</Label>
        <Input name="id" placeholder="아이디를 입력해주세요" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">비밀번호</Label>
        <Input
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <Button className="mt-4">로그인하기</Button>
      </div>
    </div>
  )
}
