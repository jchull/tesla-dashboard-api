import {model, Document, Schema} from 'mongoose';

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
  teslaAuthEmail: {type: String, required: false, unique: false},
  teslaAuthPassword: {type: String, required: false, unique: false}
});

export default model('Configuration', ConfigurationSchema);

export const DEFAULT_CONFIG = {
  apiPort: 3001,
  ownerBaseUrl: 'https://owner-api.teslamotors.com',
  teslaAuthEmail: '',
  teslaAuthPassword: '',
  teslaClientKey: '81527cff06843c8634fdc09e8ac0abefb46ac849f38fe1e431c2ef2106796384',
  teslaClientSecret: 'c7257eb71a564034f9419ee651c7d0e5f7aa6bfbd18bafb5c5c033b093bb2fa3'
};
