'use server'
 
import { SAVE_NPC_URL } from '@/constants/urls'
import { Npc } from '@/interfaces'
import { authenticatedFetch } from '@/lib/utils'

export async function saveNpc(npc: Npc) {
  const npcJson = JSON.stringify(npc)

  try {
    const response = await authenticatedFetch(SAVE_NPC_URL, {
      method: 'POST',
      body: npcJson,
    })

    console.log(`The npc was created successfully!`)
  } catch (error) {
    console.error('Error saving npc:', error)
    throw error
  }
}
