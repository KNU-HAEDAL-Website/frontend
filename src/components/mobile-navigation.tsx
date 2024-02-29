'use client'

import { FaBars } from 'react-icons/fa'

import Link from 'next/link'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { navLinks } from '@/lib/data'

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
