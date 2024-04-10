import { AuthLayout } from '../_components/auth-layout'
import { BackButton } from '../_components/back-button'
import { RegisterForm } from './_components/register-form'

const RegisterPage = () => {
  return (
    <AuthLayout headerTitle="회원가입">
      <RegisterForm />
      <BackButton label="로그인하러가기" backLink="/auth/login" />
    </AuthLayout>
  )
}

export default RegisterPage
