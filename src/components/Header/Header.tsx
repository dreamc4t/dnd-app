import { Navigation } from '../Navigation'
import { ProfileOrSigninButton } from '../ProfileOrSignInButton'

const Header = () => {
  return (
    <header className='z-10 h-16'>
      <div className='flex items-center justify-between border border-red-600'>
        <div className='flex items-center'>
          <span className='font-semibold'>D&D Shop Creator</span>
        </div>

        <div className='flex items-center'>
          <Navigation />
          <ProfileOrSigninButton />
        </div>
      </div>
    </header>
  )
}

export { Header }
