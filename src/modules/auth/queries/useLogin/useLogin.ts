import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import AuthApis from "../query.apis";

import { LoginPayload } from "./useLogin.type";

export const useLogin = (
  options?: UseMutationOptions<unknown, Error, LoginPayload>
) => {
  const { mutate: onLogin, isPending } = useMutation<
    unknown,
    Error,
    LoginPayload
  >({
    mutationFn: AuthApis.login,
    ...options,
  });

  return { onLogin, isPending };
};
