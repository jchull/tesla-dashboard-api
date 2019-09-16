import {ITeslaAccount} from './TeslaAccount';
import {IVehicle} from './tesla/Vehicle';

export enum UserRoles {
  Standard,
  Admin,
}

type TUserRoles =
    UserRoles.Standard |
    UserRoles.Admin;


export interface IUser {
  _id?: string;
  username: string;
  email: string;
  role?: TUserRoles;
  password?: string;
  pwdHash?: string;
  teslaAccounts?: [ITeslaAccount];// TODO remove this
  vehicles?: [IVehicle];// TODO remove this
}
