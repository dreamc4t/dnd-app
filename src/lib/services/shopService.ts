import { GET_ALL_SHOPS_URL } from '@/constants/urls'
import { Shop } from '@/interfaces'
import { authenticatedFetch } from '../utils'

export async function fetchUserShops(): Promise<Shop[]> {
  try {
    const response = await authenticatedFetch(GET_ALL_SHOPS_URL, {
      method: 'GET',
    })

    const shops: Shop[] = await response.json()
    return shops
  } catch (error) {
    console.error('Error fetching shops:', error)
    throw error
  }
}
