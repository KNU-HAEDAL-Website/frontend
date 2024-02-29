import { NavigationItem } from '@/components/navigation-item'
import { navLinks } from '@/lib/data'

export const Navigation = () => {
  return (
    <ul className="flex flex-row gap-10">
      {navLinks.map((route) => (
        <li key={route.href}>
          <NavigationItem name={route.name} href={route.href} />
        </li>
      ))}
    </ul>
  )
}
