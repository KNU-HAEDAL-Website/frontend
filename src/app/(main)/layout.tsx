import { Header } from '@/components/header'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-16 fixed w-full z-100">
        <Header />
      </div>
      <main className="pt-16 h-full">{children}</main>
    </div>
  )
}

export default MainLayout
