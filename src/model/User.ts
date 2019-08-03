import {model, Document, Schema} from 'mongoose';

export interface IUser extends Document {
  id: number;
  username: string;
  role: string;
  teslaAuthEmail: string;
  teslaAuthPassword: string;
}


const UserSchema: Schema = new Schema({
  id: {type: Number, required: true, unique: true},
  username: {type: String, required: true, unique: true},
  role: {type: String, required: true, unique: false},
  teslaAuthEmail: {type: String, required: false, unique: false},
  teslaAuthPassword: {type: String, required: false, unique: false}
});

export default model('User', UserSchema);


