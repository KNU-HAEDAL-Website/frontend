import { Navigation } from '@/components/navigation'
import { Logo } from '@/components/logo'
import { ProfileMenu } from '@/components/profile/profile-menu'
import { MobileNavigation } from './mobile-navigation'

export const Header = () => {
  return (
    <div className="max-w-screen-xl lg:mx-auto">
      <header className="flex h-16 items-center justify-between gap-10">
        <div className="h-7">
          <Logo />
        </div>
        {/* mobile mode */}
        <div className="flex items-center gap-4 md:hidden">
          <ProfileMenu />
          <MobileNavigation />
        </div>
        {/* desktop mode */}
        <div className="hidden items-center gap-8 md:flex">
          <Navigation />
          <ProfileMenu />
        </div>
      </header>
    </div>
  )
}
