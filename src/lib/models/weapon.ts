// src/models/weapon.ts
import mongoose, { Schema, Document } from 'mongoose'

export interface IWeapon extends Document {
  name: string
  type?: string
  prize?: string
  description?: string[]
  weight?: string
  tags?: string[]
  link?: string
}

const weaponSchema = new Schema<IWeapon>({
  name: { type: String, required: true },
  type: String,
  prize: String,
  description: [String],
  weight: String,
  tags: [String],
  link: String,
})

export const Weapon =
  mongoose.models?.Weapon || mongoose.model<IWeapon>('Weapon', weaponSchema)
