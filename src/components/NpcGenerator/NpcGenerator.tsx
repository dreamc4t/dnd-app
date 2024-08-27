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
    <div className='p-6 max-w-sm mx-auto bg-gray-800 rounded-xl shadow-md space-y-4 text-white'>
      <h2 className='text-xl font-bold'>NPC Generator client</h2>
      <button
        onClick={() => refetch()}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        disabled={isLoading}
      >
        {isLoading ? 'Generating...' : 'Generate NPC'}
      </button>

      {error && <p className='text-red-500'>Failed to generate NPC</p>}

      {npc && (
        <div className='bg-gray-700 p-4 rounded-md mt-4'>
          <NpcDetails npc={npc} />
          <button
            onClick={saveNpc}
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4'
          >
            Save npc
          </button>
        </div>
      )}
    </div>
  )
}

export { NpcGenerator }
