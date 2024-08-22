import { auth } from '@/auth'

export async function UserInfo() {
  const session = await auth()

  if (!session || !session.user) return null

  const { email, name } = session.user

  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  )
}
