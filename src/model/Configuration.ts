import mongoose, {Document, Schema} from 'mongoose';

export interface IConfiguration extends Document {
  apiPort: number;
  ownerBaseUrl: string;
  teslaClientKey: string;
  teslaClientSecret: string;
  teslaAuthEmail: string;
  teslaAuthPassword: string;
}


const ConfigurationSchema: Schema = new Schema({
  apiPort: {type: Number, required: true, unique: false},
  ownerBaseUrl: {type: String, required: true, unique: false},
  teslaClientKey: {type: String, required: true, unique: false},
  teslaClientSecret: {type: String, required: true, unique: false},
  teslaAuthEmail: {type: String, required: true, unique: false},
  teslaAuthPassword: {type: String, required: true, unique: false}
});

export default mongoose.model('Configuration', ConfigurationSchema);
