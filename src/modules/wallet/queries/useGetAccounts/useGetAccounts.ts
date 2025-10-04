import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { apiCall, PaginationApiResponse, PaginationParams } from "@/lib";

import { WalletKeys } from "../../base";
import WalletApis from "../wallet.apis";
import { WalletQueryKeys } from "../wallet.keys";

import {
  GetAccountsResponse,
  UseGetAccountsParams,
} from "./useGetAccounts.types";

export const useGetAccounts = ({
  initialParams,
  options,
}: UseGetAccountsParams = {}) => {
  const [params, setParams] = useState<PaginationParams>(
    initialParams || {
      skip: 0,
      take: 10,
    }
  );

  const { data, isLoading } = useQuery<
    PaginationApiResponse<GetAccountsResponse>,
    Error,
    PaginationApiResponse<GetAccountsResponse>
  >({
    queryKey: [WalletQueryKeys.GET_ACCOUNTS],
    queryFn: apiCall<PaginationApiResponse<GetAccountsResponse>>(
      WalletApis.getAccounts,
      params
    ),
    notifyOnChangeProps: ["data", "isLoading"],
    enabled: !!params[WalletKeys.ID],
    ...options,
  });

  const { data: accounts = [], totalRecords = 0 } = data || {};

  return {
    accounts,
    totalAccounts: totalRecords,
    isLoadingAccounts: isLoading,

    params,
    setParams,
  };
};
