import { ALL_ITEMS_PATH } from '@/constants/urls'
import { Item, Weapon } from '@/interfaces'

export async function fetchAllItems(): Promise<Item[] | Weapon[]> {
  const res = await fetch(ALL_ITEMS_PATH, {
    cache: 'no-cache',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const items: (Item | Weapon)[] = await res.json()


  return items
}
