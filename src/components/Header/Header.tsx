import Link from 'next/link'
import { Navigation } from '../Navigation'
import { ProfileOrSigninButton } from '../ProfileOrSignInButton'
import { appTitle } from '@/constants/strings'

const Header = () => {
  return (
    <header className='z-10 border-b'>
      <div className='mx-5 flex h-14 items-center justify-between'>
        {/* TODO Separate into logo */}
        <Link className='flex items-center font-semibold' href={'/'}>
          {appTitle}
        </Link>

        <div className='flex items-center gap-8'>
          <Navigation />
          <ProfileOrSigninButton />
        </div>
      </div>
    </header>
  )
}

export { Header }
