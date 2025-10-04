import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";

import { Toastify } from "@/components";
import { useDialog } from "@/hooks";

import WalletApis from "../wallet.apis";
import { WalletQueryKeys } from "../wallet.keys";

import { CreateAccountPayload } from "./useCreateAccount.types";

export const useCreateAccount = (
  options?: UseMutationOptions<unknown, Error, CreateAccountPayload>
) => {
  const { hideDialog } = useDialog();

  const queryClient = useQueryClient();

  const { mutate: onCreateAccount, isPending } = useMutation<
    unknown,
    Error,
    CreateAccountPayload
  >({
    mutationFn: WalletApis.createAccount,
    onSuccess: () => {
      Toastify.Success("Account created successfully");
      queryClient.invalidateQueries({
        queryKey: [WalletQueryKeys.GET_WALLET_GENERAL],
      });
      hideDialog();
    },
    onError: () => {
      Toastify.Error("Account creation failed");
    },
    ...options,
  });

  return { onCreateAccount, isPending };
};
