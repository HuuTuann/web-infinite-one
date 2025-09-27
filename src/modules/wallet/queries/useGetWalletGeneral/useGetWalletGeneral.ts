import { useQuery } from "@tanstack/react-query";

import { apiCall, ApiResponse } from "@/lib";

import WalletApis from "../wallet.apis";
import { WalletQueryKeys } from "../wallet.keys";

import {
  GetWalletGeneralQuery,
  GetWalletGeneralResponse,
} from "./useGetWalletGeneral.types";

export const useGetWalletGeneral = (query: GetWalletGeneralQuery) => {
  const { id, options } = query;
  const { data, isLoading } = useQuery<
    ApiResponse<GetWalletGeneralResponse>,
    Error,
    ApiResponse<GetWalletGeneralResponse>
  >({
    queryKey: [WalletQueryKeys.GET_WALLET_GENERAL, id],
    queryFn: apiCall<ApiResponse<GetWalletGeneralResponse>>(
      WalletApis.getGeneral,
      id
    ),
    enabled: !!id,
    ...options,
  });

  const { data: walletGeneral } = data || {};

  return {
    walletGeneral,
    isLoadingWalletGeneral: isLoading,
  };
};
