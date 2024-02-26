import { Logo } from '@/components/logo'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col h-full justify-center items-center gap-4 bg-primary">
      <div className="h-auto w-52">
        <Logo />
      </div>
      {children}
    </main>
  )
}

export default AuthLayout
