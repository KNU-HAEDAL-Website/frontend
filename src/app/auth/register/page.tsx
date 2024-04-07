import { AuthLayout } from '../_components/auth-layout'
import { RegisterForm } from './_components/register-form'

const RegisterPage = () => {
  return (
    <AuthLayout headerTitle="Sign in to HAEDAL">
      <RegisterForm />
    </AuthLayout>
  )
}

export default RegisterPage
