export interface IUserPreferences {
  _id?: string;
  username: string;

  display_currencyCode: string;
  display_distanceUnits: 'mi' | 'km';
  display_tempUnits: 'F' | 'C'
}


export const DEFAULT_PREFERENCES: IUserPreferences = {
  username: 'default',
  display_distanceUnits: 'mi',
  display_currencyCode: 'USD',
  display_tempUnits: 'F'
};
