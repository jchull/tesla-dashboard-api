import {IDriveState} from './DriveState';
import {IVehicleSession} from './VehicleSession';

export interface IDriveSession extends IVehicleSession {
  _id: string;
  distance?: number;  // end of trip
  first: IDriveState;
  last?: IDriveState
}
