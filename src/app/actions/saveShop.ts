'use server'

import { CREATE_SHOP_URL } from '@/constants/urls'
import { Shop } from '@/interfaces'
import { authenticatedFetch } from '@/lib/utils'

export async function saveShop(shop: Shop) {
  const shopJson = JSON.stringify(shop)

  try {
    const response = await authenticatedFetch(CREATE_SHOP_URL, {
      method: 'POST',
      body: shopJson,
    })

    console.log(`The shop ${shop.name} was created successfully!`)
  } catch (error) {
    console.error('Error saving shop:', error)
    throw error
  }
}
