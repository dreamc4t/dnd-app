// src/app/api/npc/user/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getNpcsByUserId } from '@/lib/services/npcService'

export async function GET(req: NextRequest) {
  try {
    const userId = req.headers.get('user-id')
    if (!userId) {
      return NextResponse.json({ error: 'Missing user-id header' }, { status: 400 })
    }

    const npcs = await getNpcsByUserId(userId)
    return NextResponse.json(npcs)
  } catch (error) {
    console.error('[GET_NPCS_ERROR]', error)
    return NextResponse.json({ error: 'Failed to fetch NPCs' }, { status: 500 })
  }
}
