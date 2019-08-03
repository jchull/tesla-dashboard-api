import {Document, model, Schema} from 'mongoose';

export interface IProduct extends Document {
  id: string;
  type: string;
  display_name: string;
  color?: string;
}


const ProductSchema: Schema = new Schema({
  id: {type: String, required: true, unique: true},
  type: {type: String, required: true},
  display_name: {type: String, required: true},
  color: {type: String, required: false}
});

export default model('Product', ProductSchema);

