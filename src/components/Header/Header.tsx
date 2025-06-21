import { AuthButton } from '../AuthButton'
import { Navigation } from '../Navigation'

const Header = () => {
  return (
    <header className='z-10'>
      <Navigation />
      <AuthButton />
    </header>
  )
}

export { Header }
