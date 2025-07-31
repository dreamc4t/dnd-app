import { Item } from './Item'

type Shop = {
  id: string
  name: string
  userId?: string
  items: Item[]
  createdAt: string
  updatedAt?: string
}

export type { Shop }
