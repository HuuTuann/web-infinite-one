"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";

import { Loading } from "@/components";
import { DialogProvider, useHydration } from "@/hooks";
import { queryClient, toastifyConfig } from "@/lib";

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
      <ToastContainer {...toastifyConfig} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
