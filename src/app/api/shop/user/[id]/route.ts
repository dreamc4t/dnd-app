import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import dbConnect from '@/lib/db'
import { getShopsByUserId } from '@/lib/services'

export async function GET(_req: NextRequest, { params }: { params: { userId: string } }) {
  await dbConnect()

  const session = await auth()

  if (!session?.user?.id || session.user.id !== params.userId) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const shops = await getShopsByUserId(params.userId)
    return NextResponse.json(shops, { status: 200 })
  } catch (error) {
    console.error('Failed to fetch shops:', error)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
