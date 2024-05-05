import { BackButton } from '../_components/back-button'
import { RegisterLayout } from '../_components/register-layout'
import { RegisterForm } from './_components/register-form'

const RegisterPage = () => {
  return (
    <RegisterLayout headerTitle="회원가입">
      <RegisterForm />
      <BackButton label="로그인하러가기" backLink="/auth/login" />
    </RegisterLayout>
  )
}

export default RegisterPage
