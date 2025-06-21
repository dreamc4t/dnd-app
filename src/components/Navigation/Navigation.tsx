import { navigationItems } from './navigationItems'
import { NavList } from './NavList'

const Navigation = () => {
  return (
    <nav className='flex items-center justify-between p-4'>
      <NavList navigationItems={navigationItems} />
    </nav>
  )
}

export { Navigation }
