import {IDriveSession} from './DriveSession';
import {IVehicleState} from './VehicleState';

export interface IDriveState extends IVehicleState {
  _id: string;
  gps_as_of: number;
  heading: number;
  latitude: number;
  longitude: number;
  power: number;
  shift_state: string;
  speed: number;
  odometer: number;
  session?: IDriveSession
}
