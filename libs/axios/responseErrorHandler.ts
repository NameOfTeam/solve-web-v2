import { API_URL } from "@/constants/api";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import solveAxios from "./solveAxios";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "@/constants/token";
import { cookieManager } from "@/utils/cookie";

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

    const refreshToken = await cookieManager.get(REFRESH_TOKEN_KEY);

    if (refreshToken) {
      if (!isRefreshing) {
        isRefreshing = true;

        try {
          const { data } = await axios.post(`${API_URL}/auth/reissue`, {
            refreshToken,
          });

          const newAccessToken = data.data.accessToken;
          const newRefreshToken = data.data.refreshToken;

          await cookieManager.set(ACCESS_TOKEN_KEY, newAccessToken);
          await cookieManager.set(REFRESH_TOKEN_KEY, newRefreshToken);

          onRefreshed(newAccessToken);

          originalRequest.headers[
            REQUEST_TOKEN_KEY
          ] = `Bearer ${newAccessToken}`;
          return solveAxios(originalRequest);
        } catch (refreshError) {
          await cookieManager.delete(ACCESS_TOKEN_KEY);
          await cookieManager.delete(REFRESH_TOKEN_KEY);
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
