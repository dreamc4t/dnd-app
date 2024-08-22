import { auth } from '@/auth'
import { SignInButton } from './SignInButton'
import { SignOutButton } from './SignOutButton'

const AuthButton = async () => {
  const session = await auth()

  return <div>{session ? <SignOutButton /> : <SignInButton />}</div>
}

export { AuthButton }
