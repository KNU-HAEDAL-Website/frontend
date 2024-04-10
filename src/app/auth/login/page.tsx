import { AuthLayout } from '../_components/auth-layout'
import { BackButton } from '../_components/back-button'
import { LoginForm } from './_components/login-form'

const LoginPage = () => {
  return (
    <AuthLayout headerTitle="로그인">
      <LoginForm />
      <BackButton label="회원가입하기" backLink="/auth/register" />
    </AuthLayout>
  )
}

export default LoginPage
