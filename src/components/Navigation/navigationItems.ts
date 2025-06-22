import { NAV_CREATE_SHOP_URL, NAV_MY_SHOPS_URL, NAV_NPC_URL } from '@/constants/urls'

export type NavigationItem = {
  url: string
  title: string
}

export const navigationItems: NavigationItem[] = [
  { title: 'NPC', url: `/${NAV_NPC_URL}` },
  { title: 'Create Shop', url: `/${NAV_CREATE_SHOP_URL}` },
  { title: 'My shops', url: `/${NAV_MY_SHOPS_URL}` },
]
