"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/lib";
import { Toaster } from "@/components/ui/shadcn-ui";
import { useHydration } from "@/hooks";
import { Loading } from "@/components/ui/animate-ui";

export default function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const isHydrated = useHydration();

  if (!isHydrated) {
    return <Loading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster position="top-right" />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
