import Link from 'next/link'
import { NavigationItem } from '../navigationItems'

const NavListItem = ({ title, url }: NavigationItem) => {
  return (
    <li className='text-sm hover:text-accent'>
      <Link href={url}>{title}</Link>
    </li>
  )
}

export { NavListItem }
