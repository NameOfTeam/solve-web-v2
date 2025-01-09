import { API_URL } from "@/constants/api";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import solveAxios from "./solveAxios";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "@/constants/token";
import { deleteCookie, setCookie } from "@/utils/cookie";

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const onRefreshed = (token: string) => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
};

const addRefreshSubscriber = (callback: (token: string) => void) => {
  refreshSubscribers.push(callback);
};

export const responseErrorHandler = async (error: AxiosError) => {
  const originalRequest = error.config as CustomAxiosRequestConfig;

  if (originalRequest && !originalRequest._retry) {
    originalRequest._retry = true;
    const refreshToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${REFRESH_TOKEN_KEY}=`))
      ?.split("=")[1];

    if (refreshToken) {
      if (!isRefreshing) {
        isRefreshing = true;

        try {
          const { data } = await axios.post(`${API_URL}/auth/reissue`, {
            refreshToken,
          });

          const newAccessToken = data.data.accessToken;
          const newRefreshToken = data.data.refreshToken;

          setCookie(ACCESS_TOKEN_KEY, newAccessToken);
          setCookie(REFRESH_TOKEN_KEY, newRefreshToken);

          onRefreshed(newAccessToken);

          originalRequest.headers[
            REQUEST_TOKEN_KEY
          ] = `Bearer ${newAccessToken}`;
          return solveAxios(originalRequest);
        } catch (refreshError) {
          deleteCookie(ACCESS_TOKEN_KEY);
          deleteCookie(REFRESH_TOKEN_KEY);
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      return new Promise((resolve) => {
        addRefreshSubscriber((newToken: string) => {
          originalRequest.headers[REQUEST_TOKEN_KEY] = `Bearer ${newToken}`;
          resolve(solveAxios(originalRequest));
        });
      });
    } else {
      return Promise.reject(error);
    }
  }

  return Promise.reject(error);
};