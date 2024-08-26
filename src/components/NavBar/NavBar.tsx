import { AuthButton } from '@/components/AuthButton'
import { navigationItems } from './navigationItems'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='bg-primary text-textPrimary p-4 flex items-center justify-between'>
      <ul className={`flex items-center gap-4`}>
        {navigationItems.map((item, i) => {
          return (
            <li className='text-2xl font-bold hover:text-accent' key={item.title + i}>
              <Link href={item.url}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
      <AuthButton />
    </nav>
  )
}

export default NavBar
