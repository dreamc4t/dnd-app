import { AllNpcsContainer } from '@/components/AllNpcs/AllNpcsContainer'
import { getAllNpcs } from '@/lib/services/npcService'

export default async function AllNpcsPage() {
  const npcs = await getAllNpcs()
  return <AllNpcsContainer npcs={npcs} />
}
