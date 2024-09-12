import { AuthButton } from '@/components/AuthButton'
import { navigationItems } from './navigationItems'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between bg-primary p-4 text-textPrimary'>
      <ul className={`flex items-center gap-4`}>
        {navigationItems.map((item, i) => {
          const { title, url } = item
          return (
            <li className='text-2xl font-bold hover:text-accent' key={title + i}>
              <Link href={url}>{title}</Link>
            </li>
          )
        })}
      </ul>
      <AuthButton />
    </nav>
  )
}

export default NavBar
