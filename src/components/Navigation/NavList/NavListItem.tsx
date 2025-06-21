import Link from 'next/link'
import { NavigationItem } from '../navigationItems'

const NavListItem = ({ title, url }: NavigationItem) => {
  return (
    <li className='text-2xl font-bold hover:text-accent'>
      <Link href={url}>{title}</Link>
    </li>
  )
}

export { NavListItem }
