import mongoose, { Schema, Document } from 'mongoose'

export interface IItem extends Document {
  name: string
  type?: string
  prize?: string
  description?: string[]
  weight?: string
  tags?: string[]
  link?: string
}

const itemSchema = new Schema<IItem>({
  name: { type: String, required: true },
  type: String,
  prize: String,
  description: [String],
  weight: String,
  tags: [String],
  link: String,
})

export const Item = mongoose.models?.Item || mongoose.model<IItem>('Item', itemSchema)
