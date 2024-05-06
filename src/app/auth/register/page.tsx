import { AuthContentLayout } from '../_components/auth-content-layout'
import { BackButton } from '../_components/back-button'
import { RegisterForm } from './_components/register-form'

const RegisterPage = () => {
  return (
    <AuthContentLayout
      headerTitle="KNU HAEDAL 회원가입"
      className="max-w-[420px]"
    >
      <RegisterForm />
      <BackButton label="로그인하러가기" backLink="/auth/login" />
    </AuthContentLayout>
  )
}

export default RegisterPage
