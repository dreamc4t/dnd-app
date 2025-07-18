// app/api/npc/generate/route.ts
import { NextResponse } from 'next/server'
import { rollDice } from '@/lib/utils/dice'
import { v4 as uuidv4 } from 'uuid'

export async function GET() {
  // TODO names gender species from spring to here
  const gender = Math.random() < 0.5 ? 'MALE' : 'FEMALE'
  const species = 'human'
  const name = gender === 'MALE' ? 'John Doe' : 'Jane Doe'

  const npc = {
    id: uuidv4(),
    name,
    gender,
    species,
    strength: rollDice(6, 3),
    dexterity: rollDice(6, 3),
    intelligence: rollDice(6, 3),
    constitution: rollDice(6, 3),
    charisma: rollDice(6, 3),
    wisdom: rollDice(6, 3),
    userId: '', // Placeholder, filled in when saving
  }

  return NextResponse.json(npc)
}
