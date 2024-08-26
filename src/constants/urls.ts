// const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL

const NPC_PATH = 'npc' as const
const CREATE_RANDOM_NPC_PATH = 'generate' as const

const GENERATE_NPC_ENDPOINT = `${NPC_PATH}/${CREATE_RANDOM_NPC_PATH}` as const

export { GENERATE_NPC_ENDPOINT }
