import { Navigation } from '@/components/navigation'
import { Logo } from '@/components/logo'
import { Profile } from '@/components/profile'

export const Header = () => {
  return (
    <header className="h-full px-24 flex items-center justify-between bg-primary text-white">
      <Logo />
      <div className='flex items-center gap-8'>
        <Navigation />
        <Profile />
      </div>
    </header>
  )
}
