/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import { PATHS } from "@/lib";
import { useAuthStore } from "@/stores";

const REFRESH_PATH = "/auth/refresh";

function getPath(url?: string) {
  if (!url) return "";
  try {
    const u = url.startsWith("http") ? new URL(url) : new URL(url, "http://x");
    return u.pathname;
  } catch {
    return url;
  }
}

const httpsService: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_WEB_URL}/api/v1/`,
  withCredentials: true,
});

let refreshPromise: Promise<void> | null = null;

function refreshOnce() {
  refreshPromise ??= httpsService
    .post(REFRESH_PATH)
    .then(() => {})
    .finally(() => {
      refreshPromise = null;
    });
  return refreshPromise;
}

export function api<T = unknown>(
  cfg: AxiosRequestConfig & { _retry?: boolean }
) {
  return httpsService.request<T>(cfg);
}

httpsService.interceptors.response.use(
  (resp) => resp,
  async (error: AxiosError) => {
    const status = error.response?.status;
    const cfg = error.config as
      | (InternalAxiosRequestConfig & {
          _retry?: boolean;
        })
      | null;

    if (!cfg) throw error;

    const handleLogout = () => {
      const logout = useAuthStore.getState().logout;
      logout();
      if (typeof window !== "undefined") {
        window.location.href = PATHS.auth;
      }
    };
    const isRefreshReq = getPath(cfg.url).endsWith(REFRESH_PATH);

    if (isRefreshReq) {
      handleLogout();

      throw error;
    }

    const isAuthExpired = status === 401 || status === 419;

    if (isAuthExpired && !cfg._retry) {
      try {
        cfg._retry = true;
        await refreshOnce();
        return api(cfg);
      } catch (refreshError) {
        handleLogout();

        throw refreshError;
      }
    }

    throw error;
  }
);

export const apiCall = <T, P = any>(
  apiFunction: (params?: P) => Promise<AxiosResponse<T>>,
  params?: P
) => {
  return async (): Promise<T> => {
    return apiFunction(params).then((response) => response.data);
  };
};

export { httpsService };
