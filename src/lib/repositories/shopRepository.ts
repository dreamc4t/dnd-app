import { GET_ALL_SHOPS_URL, GET_USERS_SHOPS_URL, SHOP_URL } from '@/constants/urls'
import { Shop } from '@/interfaces'
import { authenticatedFetch } from '../utils'

export async function fetchUserShops(userId: string): Promise<Shop[]> {
  try {
    const response = await authenticatedFetch(GET_USERS_SHOPS_URL(userId), {
      method: 'GET',
    })

    const shops: Shop[] = await response.json()
    return shops
  } catch (error) {
    console.error('Error fetching shops:', error)
    throw error
  }
}
