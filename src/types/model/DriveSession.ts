import {IDriveState} from './DriveState';
import {IVehicleSession} from './VehicleSession';
import {IVehicle} from '../tesla/Vehicle';

export interface IDriveSession extends IVehicleSession {
  _id: string;
  distance?: number;  // end of trip
  first: IDriveState;
  last?: IDriveState;
  vehicle?: IVehicle;
}
