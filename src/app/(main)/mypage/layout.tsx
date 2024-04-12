const MypageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main className="h-screen pt-16 max-w-screen-xl xl:mx-auto">
        {children}
      </main>
    </div>
  )
}

export default MypageLayout
