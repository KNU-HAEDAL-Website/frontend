'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { FaBars } from 'react-icons/fa'

import { useMenuStore } from '@/store/menu'
import { navLinks } from '@/lib/data'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export const MobileNavigation = () => {
  const { setOpen } = useMenuStore()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      if (!e.target) return
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', closeMenu)
    return () => {
      document.addEventListener('mousedown', closeMenu)
    }
  }, [setOpen])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <FaBars onClick={() => setOpen(!open)} size="24" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-4" ref={ref}>
        {navLinks.map((route) => (
          <DropdownMenuItem key={route.href}>
            <Link href={route.href}>{route.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
