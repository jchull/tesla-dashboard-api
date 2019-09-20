export interface ISyncPreferences {
  _id: string;
  enabled: boolean;
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
}


export const DEFAULT_SYNC_PREFERENCES: ISyncPreferences = {
  _id: 'default',
  enabled: false,
  driving_pollingIntervalsSeconds: 60,
  driving_minDurationMinutes: 5,
  charging_minDurationMinutes: 5,
  charging_costPerKwhHome: 0.12,
  charging_costPerKwhSupercharging: 0.28,
  charging_pollingIntervalsSeconds: [600, 200, 30]
};
