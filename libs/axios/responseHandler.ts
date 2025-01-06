import { API_URL } from "@/constants/api";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import watodoAxios from "./solveAxios";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, REQUEST_TOKEN_KEY } from "@/constants/token";

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

export const responseHandler = async (error: AxiosError) => {
  const originalRequest = error.config as CustomAxiosRequestConfig;

  if (originalRequest.data instanceof FormData) {
    originalRequest.headers["Content-Type"] = "multipart/form-data";
  } else {
    originalRequest.headers["Content-Type"] = "application/json";
  }
  if (originalRequest && !originalRequest._retry) {
    originalRequest._retry = true;
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

    if (refreshToken) {
      if (!isRefreshing) {
        isRefreshing = true;

        try {
          const { data } = await axios.post(`${API_URL}/auth/reissue`, {
            refreshToken,
          });

          const newAccessToken = data.data.accessToken;
          const newRefreshToken = data.data.refreshToken;

          localStorage.setItem(ACCESS_TOKEN_KEY, newAccessToken);
          localStorage.setItem(REFRESH_TOKEN_KEY, newRefreshToken);

          onRefreshed(newAccessToken);

          originalRequest.headers[REQUEST_TOKEN_KEY] = `Bearer ${newAccessToken}`;
          return watodoAxios(originalRequest);
        } catch (refreshError) {
          localStorage.removeItem(ACCESS_TOKEN_KEY);
          localStorage.removeItem(REFRESH_TOKEN_KEY);
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      return new Promise((resolve) => {
        addRefreshSubscriber((newToken: string) => {
          originalRequest.headers[REQUEST_TOKEN_KEY] = `Bearer ${newToken}`;
          resolve(watodoAxios(originalRequest));
        });
      });
    } else {
      return Promise.reject(error);
    }
  }

  return Promise.reject(error);
};
