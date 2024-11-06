import axios from "axios";
import { Cookie } from "../utils/cookie";
import { Reissue } from "./auth";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 3000,
});

instance.interceptors.request.use(
  (res) => {
    const token = Cookie.get("accessToken");
    if (token) res.headers.Authorization = `Bearer ${token}`;
    return res;
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

    const {
      response: { status },
    } = err;
    if (status === 403 || status === 401) {
      const token = Cookie.get("refreshToken");
      Reissue(token)
        .then((res: any) => {
          Cookie.set("accessToken", res.data.accessToken);
          Cookie.set("refreshToken", res.data.refreshToken);
        })
        .catch(() => {
          Cookie.remove("accessToken");
          Cookie.remove("refreshToken");
          if (
            window.location.href.split("/")[
              window.location.href.split("/").length - 1
            ] !== ""
          ) {
            window.location.href = "/";
          }
        });
    } else {
      window.location.href = "/";
    }
  }
);
