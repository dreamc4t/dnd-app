import { fireEvent, render, screen } from '@testing-library/react'
import { SignOutButton } from './SignOutButton'
import { signOutString } from '@/constants/strings'
import { signOut } from 'next-auth/react'

jest.mock('next-auth/react', () => ({
  signOut: jest.fn(),
}))

describe('Sign out Button', () => {
  it('renders a button', () => {
    render(<SignOutButton />)
    const button = screen.getByRole('button', { name: signOutString })
    expect(button).toBeInTheDocument()
  })

  it('fires signOut function when clicked', () => {
    render(<SignOutButton />)
    const button = screen.getByRole('button', { name: signOutString })
    fireEvent.click(button)
    expect(signOut).toHaveBeenCalled()
  })
})
