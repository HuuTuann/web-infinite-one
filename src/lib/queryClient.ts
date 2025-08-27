import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry(failureCount, error) {
        const s =
          (error as { response?: { status?: number } })?.response?.status ?? 0;
        if (s && s < 500 && s !== 429) return false;
        return failureCount < 2;
      },

      refetchOnWindowFocus: false,
      staleTime: 30_000,
      gcTime: 10 * 60_000,
    },
    mutations: { retry: 0 },
  },
});
