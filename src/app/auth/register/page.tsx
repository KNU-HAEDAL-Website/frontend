import { AuthLayout } from '@/components/auth/auth-layout'
import { RegisterForm } from '@/components/auth/register-form'

const RegisterPage = () => {
  return (
    <AuthLayout headerTitle="Sign in to HAEDAL">
      <RegisterForm />
    </AuthLayout>
  )
}

export default RegisterPage
