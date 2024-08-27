import { UserInfo } from '@/components'
import { auth } from '@/lib/auth'

export default async function UserPage() {
  const session = await auth()

  if (!session || !session.user) return <div>Not logged in</div>

  return (
    <main>
      User info:
      <UserInfo user={session.user} />
    </main>
  )
}
