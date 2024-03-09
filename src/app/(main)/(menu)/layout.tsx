const MenuLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main className="h-full pt-16">{children}</main>
    </div>
  )
}

export default MenuLayout
