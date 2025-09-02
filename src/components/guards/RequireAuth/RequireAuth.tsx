"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Loading } from "@/animate-ui";
import { Toastify } from "@/io-ui";
import { useAuthStore } from "@/stores";

type Props = {
  children: React.ReactNode;
  redirectTo?: string;
};

export const RequireAuth = ({ children, redirectTo = "/auth" }: Props) => {
  const router = useRouter();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        router.replace(redirectTo);
      }, 300);
      Toastify.Error("Unauthorized access");
    }
  }, [isAuthenticated, redirectTo, router]);

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return <Loading />;
};
