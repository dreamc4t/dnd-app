import { auth } from '@/lib/auth'

import { ProfileButton } from '../ProfileButton'
import { SignInButton } from '../AuthButtons/SignInButton'

const ProfileOrSigninButton = async () => {
  const session = await auth()

  return <div>{session ? <ProfileButton /> : <SignInButton />}</div>
}

export { ProfileOrSigninButton }
