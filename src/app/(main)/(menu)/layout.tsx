import { SemesterList } from "@/components/semester-list"


const MenuLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="pt-16">
        <SemesterList/>
      </div>
      <main className="h-full">{children}</main>
    </div>
  )
}

export default MenuLayout
