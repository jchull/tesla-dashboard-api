export interface IUserPreferences {
  _id?: string;
  username: string;
  charging_minDurationMinutes: number;
  charging_costPerKwhHome: number;
  charging_costPerKwhSupercharging: number;
  /**
   * tuple of polling intervals in seconds to use while charging
   * level 1 charging = [0], level 2 = [1], etc
   */
  charging_pollingIntervalsSeconds: [number, number, number];


  driving_pollingIntervalsSeconds: number;
  driving_minDurationMinutes: number;


  display_currencyCode: string;
  display_distanceUnits: 'mi' | 'km';
  display_tempUnits: 'F' | 'C'
}


export const DEFAULT_PREFERENCES: IUserPreferences = {
  username: 'default',
  display_distanceUnits: 'mi',
  display_currencyCode: 'USD',
  display_tempUnits: 'F',
  driving_pollingIntervalsSeconds: 60,
  driving_minDurationMinutes: 5,
  charging_minDurationMinutes: 5,
  charging_costPerKwhHome: 0.12,
  charging_costPerKwhSupercharging: 0.28,
  charging_pollingIntervalsSeconds: [600, 200, 30]
};
