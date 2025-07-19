// src/lib/utils/species.ts
import { SPECIES } from '@/constants/enums'

export function getRandomSpecies(): SPECIES {
  const values = Object.values(SPECIES)
  const randomIndex = Math.floor(Math.random() * values.length)
  return values[randomIndex]
}
