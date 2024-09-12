'use client'

import { useGenerateNpc } from '@/hooks/useGenerateNpc'
import { useSession } from 'next-auth/react'
import NpcDetails from './NpcDetails'

const NpcGenerator = () => {
  const { data: npc, error, isLoading, refetch, isFetching, isError } = useGenerateNpc()
  const session = useSession()

  const saveNpc = async () => {
    if (!session.data?.user?.id) {
      console.error('User is not authenticated')
      return
    }

    const npcJsonBody = JSON.stringify({
      ...npc,
    })

    const response = await fetch('http://localhost:8080/npc/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'user-id': session.data?.user?.id ?? '',
      },
      credentials: 'include', // Ensures cookies are sent with the request
      body: npcJsonBody,
    })

    if (!response.ok) {
      console.error('Failed to save NPC')
      return
    }

    console.log('NPC saved successfully')
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
            onClick={saveNpc}
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
