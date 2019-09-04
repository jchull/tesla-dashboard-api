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
  _id: string;
  username: string;
  email: string;
  role: TUserRoles;
  password: string | undefined;
  pwdHash: string | undefined;
  teslaAccounts: [ITeslaAccount];
  vehicles?: [IVehicle];
}
