import { Logo } from '@/components/logo'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-fit flex-col items-center justify-center gap-4 bg-primary py-20 min-h-screen">
      <div className="h-auto w-52">
        <Logo />
      </div>
      {children}
    </main>
  )
}

export default AuthLayout
