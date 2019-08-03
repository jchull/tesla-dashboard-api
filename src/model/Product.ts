import mongoose, { Schema, Document } from 'mongoose';

export interface IProductSchema extends Document {
  id: string;
  type: string;
  name: string;
  color?: string;
}


const ProductSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  name: { type: String, required: true },
  color: { type: String, required: false }
});

export default mongoose.model('Product', ProductSchema);
