import { ALL_ITEMS_PATH } from '@/constants/urls'
import { Item } from '@/interfaces'

export async function fetchAllItems(): Promise<Item[]> {
  const res = await fetch(ALL_ITEMS_PATH)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
