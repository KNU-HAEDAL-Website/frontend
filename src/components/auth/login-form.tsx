import { AuthLayout } from '@/components/auth/auth-layout'
import { SocialButton } from '@/components/auth/social-button'
import { Label } from '../ui/label'

export const LoginForm = () => {
  return (
    <AuthLayout headerTitle="Sign in to HAEDAL">
      <Label className='text-sm text-muted-foreground'>
        소셜 계정으로 로그인
      </Label>
      <SocialButton />
    </AuthLayout>
  )
}
