"use client";

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";

const REFRESH_PATH = "/auth/refresh";

function getPath(url?: string) {
  if (!url) return "";
  try {
    // Hỗ trợ cả relative & absolute
    const u = url.startsWith("http") ? new URL(url) : new URL(url, "http://x");
    return u.pathname;
  } catch {
    return url; // fallback
  }
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVICE_URL,
  withCredentials: true,
  // Nếu BE dùng CSRF double-submit, bật 2 dòng dưới:
  // xsrfCookieName: "csrfToken",
  // xsrfHeaderName: "X-CSRF-Token",
});

let refreshPromise: Promise<void> | null = null;

/** Chỉ gọi /auth/refresh 1 lần cho nhiều request đồng thời */
function refreshOnce() {
  refreshPromise ??= axiosInstance
    .post(REFRESH_PATH)
    .then(() => {})
    .finally(() => {
      refreshPromise = null;
    });
  return refreshPromise;
}

/** Hàm gọi API chuẩn để có type & tái sử dụng config cũ khi retry */
export function api<T = unknown>(
  cfg: AxiosRequestConfig & { _retry?: boolean },
) {
  return axiosInstance.request<T>(cfg);
}

axiosInstance.interceptors.response.use(
  (resp) => resp,
  async (error: AxiosError) => {
    const status = error.response?.status;
    const cfg = error.config as
      | (InternalAxiosRequestConfig & {
          _retry?: boolean;
        })
      | null;

    // Không có config (ví dụ lỗi sớm) => ném lại
    if (!cfg) throw error;

    // Tránh loop: không retry cho chính call refresh
    const isRefreshReq = getPath(cfg.url).endsWith(REFRESH_PATH);
    if (isRefreshReq) throw error;

    // Một số BE trả 419 cho CSRF/hết hạn session: xử lý như 401
    const isAuthExpired = status === 401 || status === 419;

    // Chỉ retry 1 lần / request
    if (isAuthExpired && !cfg._retry) {
      try {
        cfg._retry = true;
        await refreshOnce();
        // Quan trọng: dùng lại chính config cũ
        return api(cfg);
      } catch {
        // refresh failed => propagate để FE logout/chuyển login
        throw error;
      }
    }

    // Optional: với 429 có thể delay ngắn trước khi ném/để React Query retry
    // if (status === 429) await new Promise(r => setTimeout(r, 500));

    // Network errors (mất mạng, timeout) để React Query xử lý retry
    // code ví dụ: 'ECONNABORTED', 'ERR_NETWORK'
    throw error;
  },
);

export { axios };
