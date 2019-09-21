export interface ISyncPreferences {
  _id: string;
  enabled: boolean;
  account_id?: string;
  sleepTriggerSeconds: number;
  charging_minDurationMinutes: number;
  charging_costPerKwhHome: number;
  charging_costPerKwhSupercharging: number;
  charging_maxGapSeconds: number;
  /**
   * tuple of polling intervals in seconds to use while charging
   * level 1 charging = [0], level 2 = [1], etc
   */
  charging_pollingIntervalsSeconds: [number, number, number];

  driving_pollingIntervalSeconds: number;
  driving_minDurationMinutes: number;
  driving_maxGapSeconds: number;
}


export const DEFAULT_SYNC_PREFERENCES: ISyncPreferences = {
  _id: 'default',
  enabled: false,
  charging_maxGapSeconds: 300,
  charging_minDurationMinutes: 5,
  charging_costPerKwhHome: 0.12,
  charging_costPerKwhSupercharging: 0.28,
  charging_pollingIntervalsSeconds: [600, 200, 30],
  driving_maxGapSeconds: 300,
  driving_pollingIntervalSeconds: 60,
  driving_minDurationMinutes: 5,
  sleepTriggerSeconds: 300
};
