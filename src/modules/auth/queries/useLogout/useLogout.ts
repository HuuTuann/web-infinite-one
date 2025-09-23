import { useRouter } from "next/navigation";

import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { Toastify } from "@/components";
import { PATHS } from "@/lib";
import { useAuthStore } from "@/stores";

import AuthApis from "../query.apis";

export const useLogout = (
  options?: UseMutationOptions<unknown, Error, void>
) => {
  const router = useRouter();
  const onAuthLogout = useAuthStore((s) => s.logout);

  const { mutate: onLogout, isPending } = useMutation<unknown, Error, void>({
    mutationFn: AuthApis.logout,
    onSuccess: () => {
      onAuthLogout();
      router.push(PATHS.root);
    },
    onError: () => {
      Toastify.Error("Logout failed");
    },
    ...options,
  });

  return { onLogout, isLoggingOut: isPending };
};
