const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL
const ALL_PATH = 'all'
const CREATE_PATH = 'create' as const
const DELETE_PATH = 'delete' as const
const USER_PATH = 'user' as const

// NPC
const NPC_PATH = 'npc' as const
const CREATE_RANDOM_NPC_PATH = 'generate' as const
const GENERATE_NPC_ENDPOINT = `${NPC_PATH}/${CREATE_RANDOM_NPC_PATH}` as const

// ITEM
const ITEM_PATH = 'item'
const ITEM_URL = `${BASE_URL}/${ITEM_PATH}`
const ALL_ITEMS_PATH = `${ITEM_URL}/${ALL_PATH}`

// SHOP
const SHOP_PATH = 'shop' as const
const SHOP_URL = `${BASE_URL}/${SHOP_PATH}`
const CREATE_SHOP_URL = `${SHOP_URL}/${CREATE_PATH}`
const GET_ALL_SHOPS_URL = `${SHOP_URL}/${ALL_PATH}`
const GET_USERS_SHOPS_URL = (userId: String) => `${SHOP_URL}/${USER_PATH}/${userId}`
const DELETE_SHOP_ENDPOINT = `${SHOP_PATH}/${DELETE_PATH}`

export {
  GENERATE_NPC_ENDPOINT,
  ALL_ITEMS_PATH,
  CREATE_SHOP_URL,
  GET_ALL_SHOPS_URL,
  SHOP_URL,
  DELETE_SHOP_ENDPOINT,
  GET_USERS_SHOPS_URL,
}
