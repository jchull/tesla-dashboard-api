export interface ITeslaAccount {
  _id: string;
  token_created_at?: number;
  token_expires_in?: number;
  refresh_token?: string;
  access_token?: string;
  email: string;
  // Does not get persisted
  password: string;
}

