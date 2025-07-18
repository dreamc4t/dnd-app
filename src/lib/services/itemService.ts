import dbConnect from '@/lib/db'
import { Item, Weapon } from '@/lib/models'
import type { Item as AppItem } from '@/interfaces'

function serializeId<T extends { _id: any }>(doc: T): T & { _id: string } {
  return {
    ...doc,
    _id: doc._id.toString(),
  }
}

function toAppItem(doc: any): AppItem {
  return {
    id: doc._id.toString(),
    name: doc.name,
    type: doc.type ?? '',
    prize: doc.prize ?? '',
    description: doc.description ?? [],
    weight: doc.weight ?? '',
    tags: doc.tags ?? [],
    link: doc.link ?? '',
  }
}

export async function getAllItems() {
  await dbConnect()

  const [items, weapons] = await Promise.all([Item.find().lean(), Weapon.find().lean()])

  return [...items, ...weapons].map(serializeId).map(toAppItem)
}

export async function getItemById(id: string): Promise<AppItem | null> {
  await dbConnect()

  const item = await Item.findById(id).lean()
  if (item) {
    const typedItem = item as { _id: any }
    return toAppItem(serializeId(typedItem))
  }

  const weapon = await Weapon.findById(id).lean()
  if (weapon) {
    const typedWeapon = weapon as { _id: any }
    return toAppItem(serializeId(typedWeapon))
  }

  return null
}
