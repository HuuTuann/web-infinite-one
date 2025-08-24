import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (count, err: any) => {
        const s = err?.response?.status ?? 0;
        if (s && s < 500 && s !== 429) return false; // không retry 4xx (trừ 429)
        return count < 2;
      },
      refetchOnWindowFocus: false,
      staleTime: 30_000,
      gcTime: 10 * 60_000,
    },
    mutations: { retry: 0 },
  },
});
