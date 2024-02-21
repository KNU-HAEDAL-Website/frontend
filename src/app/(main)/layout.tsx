import { Header } from '@/components/header'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="top-0 sticky w-full bg-primary text-white px-12 lg:px-24">
        <Header />
      </div>
      <main className="h-full w-full overflow-auto">{children}</main>
    </div>
  )
}

export default MainLayout
