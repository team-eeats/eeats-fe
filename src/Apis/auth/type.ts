export type ReissueResponse = {
  accessToken: string;
  refreshToken: string;
};

export type LoginRequest = {
  account_id: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};
