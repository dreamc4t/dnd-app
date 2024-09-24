'use client'

import { SPECIES } from '@/constants/enums'
import { GET_NAMES_URL } from '@/constants/urls'
import { ApiService } from '@/lib/services'
import { useQuery } from '@tanstack/react-query'

interface UseGetRandomNameProps {
  species?: SPECIES
  gender?: string
}

export const useGetNamesForSpecies = ({ species, gender }: UseGetRandomNameProps) => {
  const queryKey = ['getNames', species, gender]

  const getNamesArray = () =>
    species && ApiService.get<string[]>(GET_NAMES_URL(species, gender))

  const { data: names, isFetching } = useQuery({
    queryKey,
    queryFn: getNamesArray,
    enabled: !!species,
  })

  return { names, isFetching }
}
