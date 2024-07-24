import { NavigationItem } from './NavigationItem'

export const Navigation = () => {
  return (
    <ul className="flex flex-row gap-10">
      {navigationLinks.map((route) => (
        <li key={route.href}>
          <NavigationItem name={route.name} href={route.href} />
        </li>
      ))}
    </ul>
  )
}

export const navigationLinks = [
  {
    name: 'Activity',
    href: '/activity',
  },
  {
    name: 'Event',
    href: '/event',
  },
  {
    name: 'Member',
    href: '/member',
  },
  {
    name: 'Notice',
    href: '/notice',
  },
] as const
