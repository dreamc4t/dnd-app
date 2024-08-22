import { MongoDBAdapter } from '@auth/mongodb-adapter'
import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import mongoClient from './lib/mongoDB'

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(mongoClient),
  providers: [Google],
})
