import { Header } from '@/components/header'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-primary">
      <div className="text-white px-12 md:px-24 lg:mx-auto max-w-screen-2xl">
        <Header />
      </div>
      <main className="h-full bg-white">
        {children}
      </main>
    </div>
  )
}

export default MainLayout
