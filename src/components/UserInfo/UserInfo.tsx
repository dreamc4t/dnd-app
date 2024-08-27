import { User } from 'next-auth'

interface UserInfoProps {
  user: User
}

const UserInfo = ({ user }: UserInfoProps) => {
  const { email, name } = user
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export { UserInfo }
