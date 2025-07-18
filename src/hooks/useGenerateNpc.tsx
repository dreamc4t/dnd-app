'use client'

import { useQuery } from '@tanstack/react-query'
import { Npc } from '@/interfaces'

export const useGenerateNpc = () => {
  const queryKey = ['generateNpc']
  const generateNpc = async (): Promise<Npc> => {
    const res = await fetch('/api/npc/generate')
    if (!res.ok) throw new Error('Failed to generate NPC')
    return res.json()
  }

  return useQuery({
    queryKey,
    queryFn: generateNpc,
  })
}
