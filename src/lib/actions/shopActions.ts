'use server'

import { deleteShop, getShopById } from '@/lib/services'
import { auth } from '@/lib/auth'
import { revalidatePath } from 'next/cache'
import { NAV_MY_SHOPS_URL } from '@/constants/urls'
import { redirect } from 'next/navigation'

export async function deleteShopAction(formData: FormData) {
  const shopId = formData.get('shopId') as string
  const redirectTo = formData.get('redirectTo') as string

  const session = await auth()
  if (!session?.user?.id) throw new Error('Unauthorized')

  const shop = await getShopById(shopId)
  if (!shop) throw new Error('Shop not found')
  console.log('shop userID', shop.userId)
  console.log('session userID', session.user.id)

  if (shop.userId?.toString() !== session.user.id) throw new Error('Forbidden')

  await deleteShop(shopId)
  revalidatePath(`/${NAV_MY_SHOPS_URL}`)
  redirect(redirectTo)
}
