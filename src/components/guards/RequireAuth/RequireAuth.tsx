"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Loading } from "@/animate-ui";
import { BaseLayout } from "@/components/layouts";
import { Toastify } from "@/io-ui";
import { PATHS } from "@/lib";
import { useAuthStore } from "@/stores";

type Props = {
  children: React.ReactNode;
  layout?: React.ComponentType<{ children: React.ReactNode }>;
  redirectTo?: string;
};

export const RequireAuth = ({
  children,
  layout: LayoutComponent = BaseLayout,
  redirectTo = PATHS.auth,
}: Props) => {
  const router = useRouter();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace(redirectTo);
      Toastify.Error("Unauthorized access");
    }
  }, [isAuthenticated, redirectTo, router]);

  if (isAuthenticated) {
    return <LayoutComponent>{children}</LayoutComponent>;
  }

  return <Loading />;
};
