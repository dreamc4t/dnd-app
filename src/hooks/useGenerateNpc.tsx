import { Npc } from '@/interfaces'
import { GENDER, SPECIES } from '@/constants/enums'
import { getRandomSpecies, rollDice } from '@/lib/utils'
import { v4 as uuidv4 } from 'uuid'
import { useRandomNameBySpecies } from './useRandomNameBySpecies'

interface UseGenerateNpcProps {
  species?: SPECIES
  gender?: GENDER
}
export const useGenerateNpc = ({ species, gender }: UseGenerateNpcProps = {}) => {
  const getName = useRandomNameBySpecies()

  const generateNpc = (): Npc => {
    const finalSpecies = species ?? getRandomSpecies()
    const finalGender = gender ?? (Math.random() < 0.5 ? GENDER.MALE : GENDER.FEMALE)

    const name = getName({ species: finalSpecies, gender: finalGender })

    return {
      id: uuidv4(),
      name,
      gender: finalGender,
      species: finalSpecies,
      strength: rollDice(6, 3),
      dexterity: rollDice(6, 3),
      intelligence: rollDice(6, 3),
      constitution: rollDice(6, 3),
      charisma: rollDice(6, 3),
      wisdom: rollDice(6, 3),
    }
  }
  return { generateNpc }
}
