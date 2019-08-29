import {IVehicleState} from './VehicleState';

export interface IVehicleSession {
  id_s: string,
  start_date: number,
  end_date?: number,
  archived: boolean,
  tags: [string],
  first: IVehicleState,
  last?: IVehicleState
}


