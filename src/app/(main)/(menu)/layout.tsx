const MenuLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main className="h-full">{children}</main>
    </div>
  )
}

export default MenuLayout
