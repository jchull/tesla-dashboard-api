import {Document} from 'mongoose';
import {IVehicleState} from './VehicleState';

export interface IVehicleSession extends Document {
  id_s: string,
  start_date: number,
  end_date?: number,
  archived: boolean,
  tags: [string],
  first: IVehicleState,
  last?: IVehicleState
}


