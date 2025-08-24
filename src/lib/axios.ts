"use client";

import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const REFRESH_PATH = "/auth/refresh";

export const axiois = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVICE_URL,
  withCredentials: true,
  // Nếu BE dùng CSRF double-submit, bật 2 dòng dưới:
  // xsrfCookieName: 'csrfToken',
  // xsrfHeaderName: 'X-CSRF-Token',
});

// ---- Mutex: đảm bảo chỉ refresh 1 lần tại 1 thời điểm
let refreshPromise: Promise<void> | null = null;
function refreshOnce() {
  refreshPromise ??= axiois
    .post(REFRESH_PATH)
    .then(() => {})
    .finally(() => {
      refreshPromise = null;
    });
  return refreshPromise;
}

axiois.interceptors.response.use(
  (r) => r,
  async (error: AxiosError) => {
    const status = error.response?.status;
    const cfg = error.config as
      | (InternalAxiosRequestConfig & { _retry?: boolean })
      | undefined;

    // Không xử lý nếu không có config, hoặc chính là call /auth/refresh
    if (!cfg || (cfg.url && cfg.url.endsWith(REFRESH_PATH))) throw error;

    if (status === 401 && !cfg._retry) {
      cfg._retry = true;
      try {
        await refreshOnce(); // BE set lại cookie access (và có thể refresh)
        return api(cfg); // gọi lại request cũ
      } catch {
        // Refresh fail: để caller tự xử lý (ví dụ redirect login)
        throw error;
      }
    }
    throw error;
  },
);
