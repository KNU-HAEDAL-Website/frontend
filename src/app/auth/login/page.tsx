import { AuthContentLayout } from '../_components/auth-content-layout'
import { BackButton } from '../_components/back-button'
import { LoginForm } from './_components/login-form'

const LoginPage = () => {
  return (
    <AuthContentLayout headerTitle="로그인">
      <LoginForm />
      <BackButton label="회원가입하기" backLink="/auth/register" />
    </AuthContentLayout>
  )
}

export default LoginPage
