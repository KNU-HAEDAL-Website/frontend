import { Navigation } from "@/components/navigation"
import { Logo } from "@/components/logo"

export const Header = () => {
  return (
    <header className="h-full w-full px-10 md:px-24 flex items-center justify-between bg-primary text-white">
        <Logo />
        <Navigation />
    </header>
  )
}
