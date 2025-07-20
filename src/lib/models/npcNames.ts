import { SPECIES } from '@/constants/enums'
import mongoose, { Schema, Document } from 'mongoose'

export interface INpcNames extends Document {
  species: SPECIES
  male: string[]
  female: string[]
  surnames: string[]
}

const npcNamesSchema = new Schema<INpcNames>(
  {
    species: {
      type: String,
      enum: Object.values(SPECIES),
      required: true,
      lowercase: true,
    },
    male: { type: [String], required: true },
    female: { type: [String], required: true },
    surnames: { type: [String], required: true },
  },
  { collection: 'npcNames', timestamps: true },
)

export const NpcNames =
  mongoose.models?.NpcNames || mongoose.model<INpcNames>('NpcNames', npcNamesSchema)
