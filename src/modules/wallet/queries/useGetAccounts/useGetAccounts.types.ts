import { UseQueryOptions } from "@tanstack/react-query";

import { PaginationApiResponse, PaginationParams } from "@/lib";

import { AccountsKeys, WalletKeys } from "../../base";

type GetAccountsResponse = {
  [AccountsKeys.ID]: string;
  [AccountsKeys.WALLET_ID]: string;
  [AccountsKeys.NAME]: string;
  [AccountsKeys.CURRENCY]: string;
  [AccountsKeys.OPENING_BALANCE]: string;
  [AccountsKeys.IS_ACTIVE]: boolean;
  [AccountsKeys.IS_DELETED]: boolean;
  [AccountsKeys.DELETED_AT]: string;
  [AccountsKeys.CREATED_AT]: string;
  [AccountsKeys.UPDATED_AT]: string;
};

type GetAccountsParams = PaginationParams & {
  [WalletKeys.ID]: string;
};

type UseGetAccountsParams = {
  initialParams?: GetAccountsParams;
  options?: UseQueryOptions<
    PaginationApiResponse<GetAccountsResponse>,
    Error,
    PaginationApiResponse<GetAccountsResponse>
  >;
};

export type { GetAccountsParams, GetAccountsResponse, UseGetAccountsParams };
