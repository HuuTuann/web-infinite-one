import { UseQueryOptions } from "@tanstack/react-query";

import { ApiResponse } from "@/lib";

import { GetWalletListResponse } from "..";

type GetWalletGeneralResponse = GetWalletListResponse;

type GetWalletGeneralQuery = {
  id: string;
  options?: UseQueryOptions<
    ApiResponse<GetWalletGeneralResponse>,
    Error,
    ApiResponse<GetWalletGeneralResponse>
  >;
};

export type { GetWalletGeneralQuery, GetWalletGeneralResponse };
