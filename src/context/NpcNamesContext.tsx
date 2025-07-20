'use client'

import { createContext, useContext, ReactNode } from 'react'
import { NpcNames } from '@/interfaces'

interface NpcNamesContextType {
  npcNames: NpcNames[]
  isLoading: boolean
}

interface NpcNamesContextProps {
  children: ReactNode
  npcNames: NpcNames[]
}

const NpcNamesContext = createContext({} as NpcNamesContextType)
const useNpcNamesContext = () => useContext(NpcNamesContext)

const NpcNamesContextProvider = ({ children, npcNames }: NpcNamesContextProps) => {
  return (
    <NpcNamesContext.Provider value={{ npcNames, isLoading: false }}>
      {children}
    </NpcNamesContext.Provider>
  )
}

export { useNpcNamesContext, NpcNamesContextProvider }
