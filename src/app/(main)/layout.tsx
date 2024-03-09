import { FooterPage } from '@/components/footer-page'
import { Header } from '@/components/header'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col">
      <div className="sticky top-0 w-full bg-primary px-12 text-white lg:px-24">
        <Header />
      </div>
      <main className="h-full w-full overflow-auto">{children}</main>
      <div>
        <FooterPage />
      </div>
    </div>
  )
}

export default MainLayout
