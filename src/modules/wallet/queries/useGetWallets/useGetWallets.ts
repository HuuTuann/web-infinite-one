import { useQuery } from "@tanstack/react-query";

import { apiCall, ApiResponse } from "@/lib";

import WalletApis from "../wallet.apis";
import { WalletQueryKeys } from "../wallet.keys";

import { GetWalletListResponse } from "./useGetWallets.type";

export const useGetWallets = () => {
  const { data, isLoading } = useQuery<
    ApiResponse<GetWalletListResponse[]>,
    Error,
    ApiResponse<GetWalletListResponse[]>
  >({
    queryKey: [WalletQueryKeys.GET_WALLETS],
    queryFn: apiCall<ApiResponse<GetWalletListResponse[]>>(WalletApis.gets),
  });

  const { data: wallets = [] } = data || {};

  return {
    wallets,
    isLoadingWallets: isLoading,
  };
};
