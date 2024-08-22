import { navigationItems } from './navigationItems'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className=''>
      <nav className='flex p-2 gap-5'>
        {navigationItems.map((item, i) => {
          return (
            <Link
              href={item.url}
              key={item.title + i}
              className='text-gray-200 hover:text-yellow-400 text-sm md:text-lg font-medium py-1 md:py-2 px-3 md:px-4 bg-gray-700 bg-opacity-60 hover:bg-opacity-70 rounded-md transition duration-300 ease-in-out shadow-md hover:shadow-lg'
            >
              {item.title}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default NavBar
