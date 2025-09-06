import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import AuthApis from "../query.apis";

import { RegisterPayload } from "./useRegister.type";

export const useRegister = (
  options?: UseMutationOptions<unknown, Error, RegisterPayload>
) => {
  const { mutate: onRegister, isPending } = useMutation<
    unknown,
    Error,
    RegisterPayload
  >({
    mutationFn: AuthApis.register,
    ...options,
  });

  return { onRegister, isPending };
};
