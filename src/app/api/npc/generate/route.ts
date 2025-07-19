// app/api/npc/generate/route.ts
import { NextResponse } from 'next/server'
import { rollDice } from '@/lib/utils/dice'
import { v4 as uuidv4 } from 'uuid'
import { getRandomSpecies } from '@/lib/utils'
import { SPECIES, GENDER } from '@/constants/enums'

export async function GET(request: Request) {
  // TODO names gender species from spring to here
  const { searchParams } = new URL(request.url)
  const speciesParam = searchParams.get('species') as SPECIES | null
  const genderParam = searchParams.get('gender') as GENDER | null

  const species = speciesParam ?? getRandomSpecies()
  const gender = genderParam ?? (Math.random() < 0.5 ? GENDER.MALE : GENDER.FEMALE)
  const name = gender === GENDER.MALE ? 'John Doe' : 'Jane Doe' // Placeholder until you hook up name logic

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
