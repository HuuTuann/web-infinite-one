import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";

import { Toastify } from "@/components";
import { useDialog } from "@/hooks";

import WalletApis from "../wallet.apis";
import { WalletQueryKeys } from "../wallet.keys";

import { CreateWalletPayload } from ".";

export const useCreateWallet = (
  options?: UseMutationOptions<unknown, Error, CreateWalletPayload>
) => {
  const { hideDialog } = useDialog();

  const queryClient = useQueryClient();

  const { mutate: onCreateWallet, isPending } = useMutation<
    unknown,
    Error,
    CreateWalletPayload
  >({
    mutationFn: WalletApis.create,
    onSuccess: () => {
      Toastify.Success("Wallet created successfully");
      queryClient.invalidateQueries({
        queryKey: [WalletQueryKeys.GET_WALLETS],
      });
      hideDialog();
    },
    onError: () => {
      Toastify.Error("Wallet creation failed");
    },
    ...options,
  });

  return { onCreateWallet, isPending };
};
