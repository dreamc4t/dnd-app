// models/Npc.ts
import { Schema, Document, models, model } from 'mongoose'

export interface INpc extends Document {
  name: string
  gender: 'MALE' | 'FEMALE'
  species: string
  strength: number
  dexterity: number
  intelligence: number
  constitution: number
  charisma: number
  wisdom: number
  userId: string
  createdAt: Date
  updatedAt: Date
}

const NpcSchema = new Schema<INpc>(
  {
    name: { type: String, required: true },
    gender: { type: String, enum: ['MALE', 'FEMALE'], required: true },
    species: { type: String, required: true },
    strength: { type: Number, required: true },
    dexterity: { type: Number, required: true },
    intelligence: { type: Number, required: true },
    constitution: { type: Number, required: true },
    charisma: { type: Number, required: true },
    wisdom: { type: Number, required: true },
    userId: { type: String, required: true },
  },
  { timestamps: true },
)

export default models?.Npc || model<INpc>('Npc', NpcSchema)
