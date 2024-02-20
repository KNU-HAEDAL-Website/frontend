import { Header } from '@/components/header'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <div className="fixed w-full bg-primary text-white px-12 lg:px-24 ">
        <Header />
      </div>
      <main className="mt-16 bg-red-200 h-full w-full xl:mx-auto max-w-screen-xl">
        {children}
      </main>
    </div>
  )
}

export default MainLayout
