import { AuthCard } from '~auth/_components/AuthCard'
import { LinkButton } from '~auth/_components/LinkButton'

import { LoginForm } from './_components/LoginForm'

const LoginPage = () => {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <AuthCard title="Sign in to HAEDAL">
        <LoginForm />
      </AuthCard>
      <LinkButton backLink="/auth/signup" label="회원가입" />
    </div>
  )
}

export default LoginPage
