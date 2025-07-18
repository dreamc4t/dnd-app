import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import dbConnect from '@/lib/db'
import { createShop } from '@/lib/services'

export async function POST(req: NextRequest) {
  await dbConnect()

  const session = await auth()

  if (!session?.user?.id) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const createdShop = await createShop(body, session.user.id)

    return NextResponse.json(createdShop, { status: 201 })
  } catch (error) {
    console.error('Failed to create shop:', error)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
