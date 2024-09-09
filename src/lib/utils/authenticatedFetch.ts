import { cookies } from 'next/headers'
import { auth } from '@/lib/auth'

export async function authenticatedFetch(url: string, options: RequestInit = {}) {
  const session = await auth()
  const user = session?.user

  if (!user?.id) {
    throw new Error('You must be signed in to perform this action')
  }

  // Get the session token from the correct cookie, depending on the environment
  const cookieStore = cookies()
  let sessionToken = cookieStore.get('__Secure-authjs.session-token')?.value

  // Fallback to non-secure cookie name if it's not found (for local dev)
  if (!sessionToken) {
    sessionToken = cookieStore.get('authjs.session-token')?.value
  }

  if (!sessionToken) {
    throw new Error('Session token is missing')
  }

  // Merge the provided options with the default headers and method
  const fetchOptions: RequestInit = {
    ...options,
    credentials: 'include', // Ensures cookies and credentials are included
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
      'user-id': user.id,
      Authorization: `Bearer ${sessionToken}`,
    },
  }

  const response = await fetch(url, fetchOptions)

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`)
  }

  return response
}
