import { NavigationItem } from '../navigationItems'
import { NavListItem } from './NavListItem'

interface NavListProps {
  navigationItems: NavigationItem[]
}

const NavList = ({ navigationItems }: NavListProps) => {
  return (
    <ul className={`flex items-center gap-4`}>
      {navigationItems.map(({ title, url }, i) => {
        return <NavListItem title={title} url={url} key={title + i} />
      })}
    </ul>
  )
}

export { NavList }
