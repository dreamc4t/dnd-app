import { navigationItems } from './navigationItems'
import { NavList } from './NavList'

const Navigation = () => {
  return (
    <nav>
      <NavList navigationItems={navigationItems} />
    </nav>
  )
}

export { Navigation }
