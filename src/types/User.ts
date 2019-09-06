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
  username: string;
  email: string;
  role?: TUserRoles;
  password?: string;
  pwdHash?: string;
  teslaAccounts?: [ITeslaAccount];
  vehicles?: [IVehicle];
}
