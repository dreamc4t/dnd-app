// hooks/useRandomNameBySpecies.ts
import { SPECIES, GENDER } from '@/constants/enums'
import { useNpcNamesContext } from '@/context'

interface GetRandomNameArgs {
  species: SPECIES
  gender?: GENDER
}

export const useRandomNameBySpecies = () => {
  const { npcNames } = useNpcNamesContext()

  const getName = ({ species, gender }: GetRandomNameArgs): string => {
    const namesBySpecies = npcNames?.find(
      (entry) => entry.species.toLowerCase() === species.toLowerCase(),
    )

    if (!namesBySpecies) return 'Nameless Wanderer'

    const { female, male, surnames } = namesBySpecies

    let firstNames: string[]
    if (gender?.toLowerCase() === GENDER.FEMALE) {
      firstNames = female
    } else if (gender?.toLowerCase() === GENDER.MALE) {
      firstNames = male
    } else {
      firstNames = [...female, ...male]
    }

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const surname = surnames[Math.floor(Math.random() * surnames.length)]

    return `${firstName} ${surname}`
  }

  return getName
}
