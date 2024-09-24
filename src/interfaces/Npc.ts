import { SPECIES } from "@/constants/enums"

export interface Npc {
  id?: string
  name: string
  species: SPECIES
  strength: number
  dexterity: number
  intelligence: number
  constitution: number
  charisma: number
  wisdom: number
  userId?: string
}
