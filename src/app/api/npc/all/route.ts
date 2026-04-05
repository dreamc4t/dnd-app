// src/app/api/npc/all/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getAllNpcs } from '@/lib/services/npcService'

export async function GET(req: NextRequest) {
  try {
    const npcs = await getAllNpcs()
    return NextResponse.json(npcs)
  } catch (error) {
    console.error('[GET_NPCS_ERROR]', error)
    return NextResponse.json({ error: 'Failed to fetch NPCs' }, { status: 500 })
  }
}
