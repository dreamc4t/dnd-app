'use client'

import { useQuery } from '@tanstack/react-query'
import { Npc } from '@/interfaces'
import { ApiService } from '@/app/services'
import { GENERATE_NPC_ENDPOINT } from '@/app/constants/urls'

export const useGenerateNpc = () => {
  const queryKey = ['generateNpc']
  const generateNpc = () => ApiService.get<Npc>(GENERATE_NPC_ENDPOINT)

  return useQuery({
    queryKey,
    queryFn: generateNpc,
  })
}
