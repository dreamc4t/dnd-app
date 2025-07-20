'use client'

import { useGenerateNpc } from '@/hooks/useGenerateNpc'
import NpcDetails from './NpcDetails'
import { NameGeneratorRow } from './NameGeneratorRow'
import { useEffect, useState } from 'react'
import { Npc } from '@/interfaces'
import { useRandomNameBySpecies } from '@/hooks/useRandomNameBySpecies'

const NpcGenerator = () => {
  const [npc, setNpc] = useState<Npc | null>(null)
  const [npcName, setNpcName] = useState<string>('')

  const { generateNpc } = useGenerateNpc()
  const getRandomName = useRandomNameBySpecies()

  const handleSaveNpc = async () => {
    if (!npc) return

    try {
      const res = await fetch('/api/npc/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...npc, name: npcName }),
      })

      if (!res.ok) {
        throw new Error(`Failed to save NPC: ${res.statusText}`)
      }

      console.log('NPC saved successfully!')
    } catch (error) {
      console.error('Failed to save npc:', error)
    }
  }

  const handleOnGenerateClick = () => {
    const newNpc = generateNpc()
    setNpc(newNpc)
  }
  const handleRandomNameClick = () => {
    if (!npc) return
    const name = getRandomName({ species: npc.species, gender: npc.gender })
    setNpcName(name)
  }

  useEffect(() => {
    npc?.name && setNpcName(npc.name)
  }, [npc])

  return (
    <div className='mx-auto max-w-sm space-y-4 rounded-xl bg-gray-800 p-6 text-white shadow-md'>
      <h2 className='text-xl font-bold'>NPC Generator client</h2>
      <button
        onClick={handleOnGenerateClick}
        className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
      >
        Generate NPC
      </button>

      {npc && (
        <div className='mt-4 rounded-md bg-gray-700 p-4'>
          <NameGeneratorRow name={npcName} onRandomNameClick={handleRandomNameClick} />
          <p>Species: {npc.species} </p>
          <p>Gender: {npc.gender}</p>
          <NpcDetails npc={npc} />
          <button
            onClick={handleSaveNpc}
            className='mt-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700'
          >
            Save npc
          </button>
        </div>
      )}
    </div>
  )
}

export { NpcGenerator }
