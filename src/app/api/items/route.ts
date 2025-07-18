import { getAllItems } from '@/lib/services/itemService'
import { NextResponse } from 'next/server'

export async function GET() {
  const items = await getAllItems()
  return NextResponse.json(items)
}
