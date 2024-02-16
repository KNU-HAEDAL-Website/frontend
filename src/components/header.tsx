import { Navigation } from "@/components/navigation"

export const Header = () => {
  return (
    <header className="h-full w-full px-10 md:px-24 flex items-center justify-between bg-primary text-white">
        <Navigation />
    </header>
  )
}
