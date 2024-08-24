import NextAuth from 'next-auth'
import { nextAuthOptions } from './nextAuthOptions'

export const { handlers, auth } = NextAuth(nextAuthOptions)
