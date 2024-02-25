import { AuthLayout } from '@/components/auth/auth-layout'
import { SocialButton } from '@/components/auth/social-button'

const LoginPage = () => {
  return (
    <AuthLayout headerTitle="Sign up to HAEDAL">
      <SocialButton />
    </AuthLayout>
  )
}

export default LoginPage
