import { InternalAxiosRequestConfig } from "axios";
import { ACCESS_TOKEN_KEY, REQUEST_TOKEN_KEY } from "@/constants/token";
import { getCookies } from "next-client-cookies/server";

export const requestHandler = async (
  config: InternalAxiosRequestConfig<any>
) => {
  console.log(config);

  if (typeof window === "undefined") {
    const cookies = await getCookies();
    const accessToken = cookies.get(ACCESS_TOKEN_KEY);
    if (accessToken) {
      config.headers[REQUEST_TOKEN_KEY] = `Bearer ${accessToken}`;
    }
  }

  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  } else {
    config.headers["Content-Type"] = "application/json";
  }
  return config;
};
