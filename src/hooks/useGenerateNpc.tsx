'use client'

import { useQuery } from '@tanstack/react-query'
import { Npc } from '@/interfaces'
import { ApiService } from '@/services'
import { GENERATE_NPC_ENDPOINT } from '@/constants/urls'

export const useGenerateNpc = () => {
  const queryKey = ['generateNpc']
  const generateNpc = () => ApiService.get<Npc>(GENERATE_NPC_ENDPOINT)

  return useQuery({
    queryKey,
    queryFn: generateNpc,
  })
}
