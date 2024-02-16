import { Navigation } from '@/components/navigation'
import { Logo } from '@/components/logo'
import { Profile } from '@/components/profile'
import { MobileNavigation } from './mobile-navigation'

export const Header = () => {
  return (
    <header className="h-full w-full px-10 md:px-24 flex items-center justify-between bg-primary text-white">
      <Logo />
      {/* mobile mode */}
      <div className="flex items-center gap-4 md:hidden">
        <Profile />
        <MobileNavigation />
      </div>
      {/* desktop mode */}
      <div className="hidden md:flex items-center gap-8">
        <Navigation />
        <Profile />
      </div>
    </header>
  )
}
