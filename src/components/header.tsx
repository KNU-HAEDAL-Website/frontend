import { Navigation } from '@/components/navigation'
import { Logo } from '@/components/logo'
import { ProfileMenu } from '@/components/profile-menu'
import { MobileNavigation } from './mobile-navigation'

export const Header = () => {
  return (
    <div className="lg:mx-auto max-w-screen-xl">
      <header className="h-16 flex items-center justify-between gap-10">
        <Logo />
        {/* mobile mode */}
        <div className="flex items-center gap-4 md:hidden">
          <ProfileMenu />
          <MobileNavigation />
        </div>
        {/* desktop mode */}
        <div className="hidden md:flex items-center gap-8">
          <Navigation />
          <ProfileMenu />
        </div>
      </header>
    </div>
  )
}
