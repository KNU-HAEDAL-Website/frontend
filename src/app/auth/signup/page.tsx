'use client'

import { AuthCard } from '@/app/auth/_components/AuthCard'
import { LinkButton } from '@/app/auth/_components/LinkButton'

import { SignupForm } from './_components/SignupForm'

const SignupPage = () => {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <AuthCard title="Sign up to HAEDAL" className="max-w-lg">
        <SignupForm />
      </AuthCard>
      <div className="flex w-3/4 flex-col items-center justify-center pt-2 sm:flex-row">
        <div className="w-max text-sm text-input">계정이 이미 있으신가요?</div>
        <LinkButton backLink="/auth/login" label="로그인하기" />
      </div>
    </div>
  )
}

export default SignupPage
