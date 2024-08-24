import { MongoDBAdapter } from '@auth/mongodb-adapter'
import { NextAuthConfig, Session } from 'next-auth'
import mongoClient from '../mongoDB'
import Google from 'next-auth/providers/google'

export const nextAuthOptions: NextAuthConfig = {
  adapter: MongoDBAdapter(mongoClient),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    async session({ session, user }) {
      const strippedSession: Session = {
        user,
        expires: session.expires,
      }

      return strippedSession
    },
  },
  secret: process.env.AUTH_SECRET,
}
