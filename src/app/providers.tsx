"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Loading } from "@/animate-ui";
import { DialogProvider, useHydration } from "@/hooks";
import { queryClient } from "@/lib";
import { Toaster } from "@/shadcn-ui";

export default function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const isHydrated = useHydration();

  if (!isHydrated) {
    return <Loading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <DialogProvider>{children}</DialogProvider>
      <Toaster position="top-right" />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
