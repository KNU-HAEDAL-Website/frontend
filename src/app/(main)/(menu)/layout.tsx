import { SemesterList } from "@/components/semester-list"


const MenuLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SemesterList/>
      <main className="h-full">{children}</main>
    </div>
  )
}

export default MenuLayout
