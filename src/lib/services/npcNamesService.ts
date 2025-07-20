// services/npcNamesService.ts
import dbConnect from '@/lib/db'
import { NpcNames as NpcNamesModel } from '../models'
import { NpcNames as AppNpcNames } from '@/interfaces'

function toAppNpcNames(doc: any): AppNpcNames {
  return {
    id: doc._id.toString(),
    species: doc.species,
    male: doc.male,
    female: doc.female,
    surnames: doc.surnames,
  }
}

export async function getAllNpcNames(): Promise<AppNpcNames[]> {
  await dbConnect()
  const docs = await NpcNamesModel.find().lean()
  return docs.map(toAppNpcNames)
}
