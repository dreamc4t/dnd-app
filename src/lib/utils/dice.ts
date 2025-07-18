// lib/utils/dice.ts
export const rollDice = (sides: number, rolls: number): number => {
  return Array.from({ length: rolls }).reduce(
    (total: number) => total + Math.floor(Math.random() * sides) + 1,
    0,
  )
}
