// app/api/npc/user/route.ts
import dbConnect from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'
import Npc from '@/lib/models/npc'

export async function GET(req: NextRequest) {
  try {
    const userId = req.headers.get('user-id')
    if (!userId) {
      return NextResponse.json({ error: 'Missing user-id header' }, { status: 400 })
    }

    await dbConnect()
    const npcs = await Npc.find({ userId }).sort({ createdAt: -1 })
    return NextResponse.json(npcs)
  } catch (error) {
    console.error('[GET_NPCS_ERROR]', error)
    return NextResponse.json({ error: 'Failed to fetch NPCs' }, { status: 500 })
  }
}
