import { Header } from '@/components/header'
import { SemesterList } from '@/components/semester-list'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-16 fixed w-full z-100">
        <Header />
      </div>
      <div className='pt-16'>
        <SemesterList />
      </div>
      <main className="h-full">{children}</main>
    </div>
  )
}

export default MainLayout
