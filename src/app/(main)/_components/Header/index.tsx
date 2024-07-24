import { Logo } from '@/components/Logo'

import { MobileNavigation } from './MobileNavigation'
import { Navigation } from './Navigation'
import { ProfileButton } from './ProfileButton/inex'

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between gap-10 px-12">
      <Logo className="h-7" />
      {/* mobile mode */}
      <div className="flex items-center gap-4 md:hidden">
        <ProfileButton />
        <MobileNavigation />
      </div>
      {/* desktop mode */}
      <div className="hidden items-center gap-8 md:flex">
        <Navigation />
        <ProfileButton />
      </div>
    </header>
  )
}
