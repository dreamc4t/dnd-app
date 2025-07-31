import dbConnect from '@/lib/db'
import { Shop } from '../models'
import type { Shop as AppShop } from '@/interfaces'

function toAppShop(doc: any): AppShop {
  return {
    id: doc._id.toString(),
    name: doc.name ?? '',
    userId: doc.userId?.toString(),
    items: doc.items ?? [],
    createdAt: doc.createdAt?.toString(),
    updatedAt: doc.updatedAt?.toString(),
  }
}

export async function getShopsByUserId(userId: string): Promise<AppShop[]> {
  await dbConnect()
  const docs = await Shop.find({ userId }).lean()
  return docs.map(toAppShop)
}

export async function getShopById(id: string): Promise<AppShop | null> {
  await dbConnect()
  const doc = await Shop.findById(id).lean()
  return doc ? toAppShop(doc) : null
}

export async function createShop(shopData: Partial<AppShop>, userId: string) {
  await dbConnect()
  return await Shop.create({ ...shopData, userId })
}

export async function deleteShop(id: string) {
  await dbConnect()
  await Shop.findByIdAndDelete(id)
}

// export async function updateShop(id: string, update: Partial<IShop>) {
//   await dbConnect()
//   return await Shop.findByIdAndUpdate(id, update, { new: true }).lean()
// }
