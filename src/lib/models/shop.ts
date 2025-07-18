import mongoose, { Schema, Document } from 'mongoose'
import { IItem } from './item'

export interface IShop extends Document {
  name: string
  userId: string
  items: IItem[]
  createdAt: Date
}

const shopSchema = new Schema<IShop>(
  {
    name: { type: String, required: true },
    userId: { type: String, required: true },
    items: { type: [Schema.Types.Mixed], default: [] }, // Embedded items
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
)

export const Shop = mongoose.models?.Shop || mongoose.model<IShop>('Shop', shopSchema)
