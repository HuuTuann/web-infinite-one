"use client";

import { Toastify } from "@/components/io-ui";
import { useHydration } from "@/hooks";
import { useAuthStore } from "@/stores";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
  redirectTo?: string;
};

export const RequireAuth = ({ children, redirectTo = "/auth" }: Props) => {
  const router = useRouter();
  const isHydrated = useHydration();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  useEffect(() => {
    if (isHydrated && !isAuthenticated) {
      setTimeout(() => {
        router.replace(redirectTo);
      }, 300);
      Toastify.Error("Unauthorized access");
    }
  }, [isAuthenticated, isHydrated, redirectTo, router]);

  if (!isHydrated) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return <div>Checking authentication...</div>;
};
