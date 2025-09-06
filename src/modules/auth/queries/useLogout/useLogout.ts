import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import AuthApis from "../query.apis";

export const useLogout = (
  options?: UseMutationOptions<unknown, Error, void>
) => {
  const { mutate: onLogout, isPending } = useMutation<unknown, Error, void>({
    mutationFn: AuthApis.logout,
    ...options,
  });

  return { onLogout, isLoggingOut: isPending };
};
