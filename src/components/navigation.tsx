import { navLinks } from '@/lib/data'
import { NavigationItem } from '@/components/navigation-item'


export const Navigation = () => {
  return (
    <ul className="flex flex-col items-center py-4 md:flex-row gap-10">
    {navLinks.map((route) => (
      <li key={route.href}>
        <NavigationItem name={route.name} href={route.href} />
      </li>
    ))}
  </ul>
  )
}
