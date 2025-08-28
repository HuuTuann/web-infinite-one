"use client";

import { useAuthStore } from "@/stores";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
  redirectTo?: string;
};

export const RequireAuth = ({ children, redirectTo = "/auth" }: Props) => {
  const router = useRouter();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) router.replace(redirectTo);
  }, [isAuthenticated, redirectTo, router]);

  if (!isAuthenticated) return null;
  return <>{children}</>;
};
