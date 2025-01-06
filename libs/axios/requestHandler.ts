import { REQUEST_TOKEN_KEY } from "@/constants/token";
import { InternalAxiosRequestConfig } from "axios";

export const requestHandler = async (config: InternalAxiosRequestConfig<any>) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  if (token) {
    config.headers[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
  }

  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  } else {
    config.headers["Content-Type"] = "application/json";
  }
  return config;
};