'use client'

import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

import { navLinks } from '@/lib/data'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export const MobileNavigation = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <FaBars size="24" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-4">
        {navLinks.map((route) => (
          <DropdownMenuItem key={route.href}>
            <Link href={route.href}>{route.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
