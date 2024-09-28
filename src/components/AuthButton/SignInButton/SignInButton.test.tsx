import { render, screen } from '@testing-library/react'
import { SignInButton } from './SignInButton'
import { signInString } from '@/constants/strings'

jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}))

describe('SignIn Button', () => {
  it('renders a button', () => {
    render(<SignInButton />)
    const button = screen.getByRole('button', { name: signInString })
    expect(button).toBeInTheDocument()
  })
})
