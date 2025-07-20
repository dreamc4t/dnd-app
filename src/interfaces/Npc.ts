import { GENDER, SPECIES } from '@/constants/enums'

export interface Npc {
  id?: string
  name: string
  gender: GENDER
  species: SPECIES
  strength: number
  dexterity: number
  intelligence: number
  constitution: number
  charisma: number
  wisdom: number
  userId?: string
  createdAt?: string
  updatedAt?: string
}

export interface NpcNames {
  id?: string
  species: SPECIES
  male: string[]
  female: string[]
  surnames: string[]
}
