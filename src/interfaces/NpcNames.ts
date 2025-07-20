import { SPECIES } from '@/constants/enums'

export interface NpcNames {
  id?: string
  species: SPECIES
  male: string[]
  female: string[]
  surnames: string[]
}
