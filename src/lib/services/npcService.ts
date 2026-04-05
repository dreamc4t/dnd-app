import dbConnect from '@/lib/db'
import { Npc, INpc } from '../models/npc'
import { Npc as AppNpc } from '@/interfaces'

function toAppNpc(doc: any): AppNpc {
  return {
    id: doc._id.toString(),
    name: doc.name,
    species: doc.species,
    gender: doc.gender,
    strength: doc.strength,
    dexterity: doc.dexterity,
    intelligence: doc.intelligence,
    constitution: doc.constitution,
    wisdom: doc.wisdom,
    charisma: doc.charisma,
    userId: doc.userId,
    createdAt: doc.createdAt?.toString(),
    updatedAt: doc.updatedAt?.toString(),
  }
}

export async function getNpcsByUserId(userId: string): Promise<AppNpc[]> {
  await dbConnect()
  const docs = await Npc.find({ userId }).lean()
  return docs.map(toAppNpc)
}

export async function createNpc(npcData: Partial<INpc>, userId: string): Promise<AppNpc> {
  await dbConnect()
  const created = await Npc.create({ ...npcData, userId })
  return toAppNpc(created)
}

export async function getAllNpcs(): Promise<AppNpc[]> {
  await dbConnect()
  const docs = await Npc.find().lean()
  return docs.map(toAppNpc)
}
