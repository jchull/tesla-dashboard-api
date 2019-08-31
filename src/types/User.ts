import {ITeslaAccount} from './TeslaAccount';
import {IVehicle} from './tesla/Vehicle';

export interface IUser {
  _id: string;
  username: string;
  email: string;
  role: string;
  teslaAccounts: Array<ITeslaAccount>;
  vehicles?: Array<IVehicle>;
}

