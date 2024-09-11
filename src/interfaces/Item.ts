type Item = {
  id: string
  description: string[]
  link: string
  name: string
  prize: string
  tags: string[]
  type: string
  weight: string
}

interface Weapon extends Item {
  damage: string
  properties: string
  isWeapon: boolean
}

export type { Item, Weapon }
