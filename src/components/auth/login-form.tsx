import { AuthLayout } from '@/components/auth/auth-layout'
import { SocialButton } from '@/components/auth/social-button'

export const LoginForm = () => {
  return (
    <AuthLayout headerTitle="Sign in to HAEDAL">
      <SocialButton />
    </AuthLayout>
  )
}
