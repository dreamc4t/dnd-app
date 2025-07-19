import { useQuery } from '@tanstack/react-query'
import { Npc } from '@/interfaces'
import { GENDER, SPECIES } from '@/constants/enums'

interface UseGenerateNpcProps {
  species?: SPECIES
  gender?: GENDER
}
export const useGenerateNpc = ({ species, gender }: UseGenerateNpcProps = {}) => {
  const queryKey = ['generateNpc', species, gender]
  const generateNpc = async (): Promise<Npc> => {
    const params = new URLSearchParams()
    if (species) params.append('species', species)
    if (gender) params.append('gender', gender)

    const response = await fetch(`/api/npc/generate?${params.toString()}`)
    if (!response.ok) throw new Error('Failed to generate NPC')
    return response.json()
  }

  return useQuery({ queryKey, queryFn: generateNpc, enabled: false })
}
