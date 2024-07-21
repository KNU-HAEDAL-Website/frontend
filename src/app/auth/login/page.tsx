import { AuthCard } from '@/app/auth/_components/AuthCard'
import { LinkButton } from '@/app/auth/_components/LinkButton'

import { LoginForm } from './_components/LoginForm'

const LoginPage = () => {
  return (
    <AuthCard title="Sign in to HAEDAL">
      <LoginForm />
      <LinkButton backLink="/auth/signup" label="회원가입하기" />
    </AuthCard>
  )
}

export default LoginPage
