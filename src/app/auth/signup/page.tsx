import { AuthCard } from '@/app/auth/_components/AuthCard'
import { LinkButton } from '@/app/auth/_components/LinkButton'

import { SignupForm } from './_components/SignupForm'

const SignupPage = () => {
  return (
    <AuthCard title="Sign up to HAEDAL">
      <SignupForm />
      <LinkButton backLink="/auth/login" label="로그인하기" />
    </AuthCard>
  )
}

export default SignupPage
