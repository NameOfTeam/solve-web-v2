import { InternalAxiosRequestConfig } from "axios";
import { ACCESS_TOKEN_KEY, REQUEST_TOKEN_KEY } from "@/constants/token";
import { cookies } from "next/headers";

export const requestHandler = async (
  config: InternalAxiosRequestConfig<any>
) => {
  if (typeof window === "undefined") {
    const cookieStore = cookies();
    const token = (await cookieStore).get(ACCESS_TOKEN_KEY)?.value;
    if (token) {
      config.headers[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
    }
  } else {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${ACCESS_TOKEN_KEY}=`))
      ?.split("=")[1];
    if (token) {
      config.headers[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
    }
  }

  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  } else {
    config.headers["Content-Type"] = "application/json";
  }
  return config;
};
