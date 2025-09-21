"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Loading, Toastify } from "@/components";
import { PATHS } from "@/lib";
import { useAuthStore } from "@/stores";

type Props = {
  children: React.ReactNode;
  layout?: React.ComponentType<{ children: React.ReactNode }>;
  redirectTo?: string;
};

export const RequireAuth = ({ children, redirectTo = PATHS.auth }: Props) => {
  const router = useRouter();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace(redirectTo);
      Toastify.Error("Unauthorized access");
    }
  }, [isAuthenticated, redirectTo, router]);

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return <Loading />;
};
