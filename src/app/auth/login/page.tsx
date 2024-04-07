import { AuthLayout } from '../_components/auth-layout'
import { LoginForm } from './_components/login-form'

const LoginPage = () => {
  return (
    <AuthLayout headerTitle="Sign up to HAEDAL">
      <LoginForm />
    </AuthLayout>
  )
}

export default LoginPage
