'use client'

import { Npc } from '@/interfaces'
import { useEffect, useState } from 'react'

export const AllNpcsContainer = ({ npcs }: { npcs: Npc[] }) => {
  const [search, setSearch] = useState<string>('')
  const [filteredNpcs, setFilteredNpcs] = useState<Npc[]>([])

  const handleSortClick = () => {
    filteredNpcs.sort()
  }
  useEffect(() => {
    const normalizedSearch = search.toLowerCase()

    const filtered = npcs.filter((npc) => {
      const nameMatches = npc.name.toLocaleLowerCase().includes(normalizedSearch)
      return nameMatches
    })
    setFilteredNpcs(filtered)
  }, [search, npcs])
  return (
    <div>
      <h1 style={{ fontSize: '24px' }}>All Npcs</h1>
      <label htmlFor='search'>
        Search:
        <input
          type='text'
          id='search'
          className='rounded-sm p-1 text-black'
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      <table>
        <thead>
          <tr className='border-b text-left'>
            <th className='w-44 py-1' onClick={handleSortClick()}>
              name
            </th>
            <th className='w-20 py-1'>gender</th>
            <th className='w-32 py-1'>species</th>
          </tr>
        </thead>
        <tbody>
          {filteredNpcs?.map((npc, i) => {
            return (
              <tr key={i}>
                <td>{npc.name}</td>
                <td>{npc.gender}</td>
                <td>{npc.species}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
