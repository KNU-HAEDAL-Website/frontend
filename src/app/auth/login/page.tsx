import { AuthCard } from '@/app/auth/_components/AuthCard'
import { LinkButton } from '@/app/auth/_components/LinkButton'

const LoginPage = () => {
  return (
    <AuthCard title="HAEDAL Login">
      <div>test</div>
      <LinkButton backLink="/auth/signup" label="회원가입하기" />
    </AuthCard>
  )
}

export default LoginPage
