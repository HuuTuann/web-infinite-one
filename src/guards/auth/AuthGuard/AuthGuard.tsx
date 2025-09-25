"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { PATHS } from "@/lib";
import { useAuthStore } from "@/stores";

type Props = {
  children: React.ReactNode;
  redirectTo?: string;
};

export const AuthGuard = ({ children, redirectTo = PATHS.wallet }: Props) => {
  const router = useRouter();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      router.replace(redirectTo);
    }
  }, [isAuthenticated, router, redirectTo]);

  return <>{children}</>;
};
