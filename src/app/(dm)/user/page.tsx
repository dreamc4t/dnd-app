import { UserInfo } from '@/components'
import { NotLoggedIn } from '@/components/NotLoggedIn'
import { auth } from '@/lib/auth'

export default async function UserPage() {
  const session = await auth()

  if (!session?.user?.id) return <NotLoggedIn />

  return (
    <main>
      User info:
      <UserInfo user={session.user} />
    </main>
  )
}
