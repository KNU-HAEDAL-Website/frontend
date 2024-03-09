import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      <div className="fixed top-0 w-full bg-primary px-12 text-white z-100 lg:px-24">
        <Header />
      </div>
      <div>
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
