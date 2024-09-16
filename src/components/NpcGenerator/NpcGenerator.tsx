'use client'

import { useGenerateNpc } from '@/hooks/useGenerateNpc'
import { useSession } from 'next-auth/react'
import NpcDetails from './NpcDetails'
import { authenticatedFetch } from '@/lib/utils'
import { saveNpc } from '@/app/actions/saveNpc'

const NpcGenerator = () => {
  const { data: npc, error, isLoading, refetch, isFetching, isError } = useGenerateNpc()

  const handleSaveNpc = async () => {
    if (!npc) return
    try {
      await saveNpc(npc)
    } catch (error) {
      console.error('Failed to save npc:', error)
    }
  }

  return (
    <div className='mx-auto max-w-sm space-y-4 rounded-xl bg-gray-800 p-6 text-white shadow-md'>
      <h2 className='text-xl font-bold'>NPC Generator client</h2>
      <button
        onClick={() => refetch()}
        className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
        disabled={isLoading}
      >
        {isLoading ? 'Generating...' : 'Generate NPC'}
      </button>

      {error && <p className='text-red-500'>Failed to generate NPC</p>}

      {npc && (
        <div className='mt-4 rounded-md bg-gray-700 p-4'>
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
