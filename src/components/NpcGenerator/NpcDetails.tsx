import { Npc } from '@/interfaces'

const NpcDetails = ({ npc }: { npc: Npc }) => {
  return (
    <div>
      <h3 className='text-lg font-semibold'>NPC Details</h3>
      <p>
        <strong>Strength:</strong> {npc.strength}
      </p>
      <p>
        <strong>Dexterity:</strong> {npc.dexterity}
      </p>
      <p>
        <strong>Intelligence:</strong> {npc.intelligence}
      </p>
      <p>
        <strong>Constitution:</strong> {npc.constitution}
      </p>
      <p>
        <strong>Charisma:</strong> {npc.charisma}
      </p>
      <p>
        <strong>Wisdom:</strong> {npc.wisdom}
      </p>
    </div>
  )
}

export default NpcDetails
