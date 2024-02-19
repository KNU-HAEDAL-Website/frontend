import { Header } from '@/components/header'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <div className="bg-primary text-white px-12 lg:px-24">
        <Header />
      </div>
      <main className="h-full bg-white lg:mx-auto max-w-screen-xl">
        {children}
      </main>
    </div>
  )
}

export default MainLayout
