
export interface IChargingPreferences {
  minChargeDurationMinutes: number;
  costPerKwhHome: number;
  costPerKwhSupercharging: number;
  /**
   * tuple of polling intervals in seconds to use while charging
   * level 1 charging = [0], level 2 = [1], etc
   */
  pollingIntervalsSeconds: [number,number,number];

}

export interface IDrivingPreferences {
  pollingIntervalsSeconds: number;

}

export interface IDisplayPreferences {
  currencyCode: string;
  distanceUnits: string;
}

export interface IUserPreferences {
  _id: string;
  charging: IChargingPreferences;
  driving: IDrivingPreferences;
  display: IDisplayPreferences;
}


export const DEFAULT_PREFERENCES:IUserPreferences =  {
  _id: 'default',
  display: {
    distanceUnits: 'miles',
    currencyCode: 'USD'
  },
  driving:{
    pollingIntervalsSeconds: 60
  },
  charging:{
    minChargeDurationMinutes: 5,
    costPerKwhHome: 0.12,
    costPerKwhSupercharging: 0.28,
    pollingIntervalsSeconds: [600, 200, 30]
  }
};
