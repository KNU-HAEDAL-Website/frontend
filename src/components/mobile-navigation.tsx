'use client'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

import { navLinks } from '@/lib/data'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useEffect, useRef, useState } from 'react'

export const MobileNavigation = () => {
  const [open, setOpen] = useState(false)
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
  }, [ref])

  return (
    <DropdownMenu open={open}>
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
