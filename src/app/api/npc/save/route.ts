// app/api/npc/save/route.ts
import { auth } from '@/lib/auth'
import dbConnect from '@/lib/db'
import Npc from '@/lib/models/npc'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const session = await auth()
    const user = session?.user

    if (!user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const npc = await req.json()

    await dbConnect()

    const savedNpc = await Npc.create({
      ...npc,
      userId: user.id,
    })

    return NextResponse.json(savedNpc, { status: 201 })
  } catch (error) {
    console.error('Error saving NPC:', error)
    return NextResponse.json({ error: 'Failed to save NPC' }, { status: 500 })
  }
}
