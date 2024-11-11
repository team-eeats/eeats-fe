import axios from "axios";
import { Cookie } from "../utils/cookie";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 3000,
});

instance.interceptors.request.use(
  (config) => {
    if (config.url === "/meals") {
      // 요청 URL이 "/"일 때
      delete config.headers.Authorization;
    } else {
      const token = Cookie.get("accessToken");
      if (token) config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    alert("오류가 발생했습니다");
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log(err);
  }
);
