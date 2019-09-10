import {IUser} from './User';

export interface IUserPreferences {
  user: IUser | 'default';
  charging_minDurationMinutes: number;
  charging_costPerKwhHome: number;
  charging_costPerKwhSupercharging: number;
  /**
   * tuple of polling intervals in seconds to use while charging
   * level 1 charging = [0], level 2 = [1], etc
   */
  charging_pollingIntervalsSeconds: [number, number, number];


  driving_pollingIntervalsSeconds: number;


  display_currencyCode: string;
  display_distanceUnits: string;
}


export const DEFAULT_PREFERENCES: IUserPreferences = {
  user: 'default',
  display_distanceUnits: 'miles',
  display_currencyCode: 'USD',
  driving_pollingIntervalsSeconds: 60,
  charging_minDurationMinutes: 5,
  charging_costPerKwhHome: 0.12,
  charging_costPerKwhSupercharging: 0.28,
  charging_pollingIntervalsSeconds: [600, 200, 30]
};
