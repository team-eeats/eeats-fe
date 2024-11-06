import { instance } from "../axios";
import { LoginRequest, LoginResponse, ReissueResponse } from "./type";

const router = "/auth";

export const Reissue = async (refreshToken: string) => {
  return await instance.put<ReissueResponse>(`${router}/reissue`, {
    headers: {
      "Refresh-Token": `${refreshToken}`,
    },
  });
};

export const Login = async (data: LoginRequest) => {
  return await instance.post<LoginResponse>(`${router}/login`, data);
};

export const AdminLogin = async (data: LoginRequest) => {
  return await instance.post<LoginResponse>(`${router}/admin-login`, data);
};
