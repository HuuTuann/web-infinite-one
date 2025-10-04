import { httpsService, stringifyQueryParams } from "@/lib";

import { WalletKeys } from "../base";

import { CreateAccountPayload } from "./useCreateAccount/useCreateAccount.types";
import { CreateWalletPayload } from "./useCreateWallet/useCreateWallet.types";
import { GetAccountsParams } from ".";

const BASE_PATH = "/wallet";

const createWallet = (payload: CreateWalletPayload) => {
  return httpsService.post(`${BASE_PATH}`, payload);
};

const getWallets = () => {
  return httpsService.get(`${BASE_PATH}`);
};

const getWalletGeneral = (id: string) => {
  return httpsService.get(`${BASE_PATH}/${id}/general`);
};

const createAccount = (payload: CreateAccountPayload) => {
  const { walletId, ...rest } = payload;

  return httpsService.post(`${BASE_PATH}/${walletId}/account`, rest);
};

const getAccounts = (params: GetAccountsParams) => {
  const { [WalletKeys.ID]: walletId, ...rest } = params;

  return httpsService.get(
    `${BASE_PATH}/${walletId}/account?${stringifyQueryParams(rest)}`
  );
};

const WalletApis = {
  create: createWallet,
  gets: getWallets,
  getGeneral: getWalletGeneral,

  createAccount,
  getAccounts,
};

export default WalletApis;
