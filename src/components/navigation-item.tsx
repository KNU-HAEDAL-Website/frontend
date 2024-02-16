'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface NavigationItemProps {
  name: string
  href: string
}

export const NavigationItem = ({ name, href }: NavigationItemProps) => {
  const pathname = usePathname()

  const isActive =
    (pathname === '/' && href === '/') ||
    pathname === href ||
    pathname?.startsWith(`${href}/`)

  return (
    <Link
      href={href}
      className={cn(
        'hover:text-slate-300 font-normal pb-1',
        isActive && 'font-medium border-b',
      )}
    >
      {name}
    </Link>
  )
}
