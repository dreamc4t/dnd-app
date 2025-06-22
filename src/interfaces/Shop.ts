import { Item } from './Item'

type Shop = {
  id: string
  name: string
  items: Item[]
  createdAt?: string
  updatedAt?: string
}

export type { Shop }
