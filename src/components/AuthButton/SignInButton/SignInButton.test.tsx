import { fireEvent, render, screen } from '@testing-library/react'
import { SignInButton } from './SignInButton'
import { signInString } from '@/constants/strings'
import { signIn } from 'next-auth/react'

jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}))

describe('SignIn Button', () => {
  it('renders a button', () => {
    render(<SignInButton />)
    const button = screen.getByRole('button', { name: signInString })
    expect(button).toBeInTheDocument()
  })

  it('fires signIn function when clicked', () => {
    render(<SignInButton />)
    const button = screen.getByRole('button', { name: signInString })
    fireEvent.click(button)
    expect(signIn).toHaveBeenCalled()
  })
})
