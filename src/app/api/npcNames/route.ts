import { getAllNpcNames } from '@/lib/services/npcNamesService'
import { NextResponse } from 'next/server'

export async function GET() {
  const npcNames = await getAllNpcNames()
  return NextResponse.json(npcNames)
}
